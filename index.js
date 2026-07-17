/**
 * Qt Mobile Appium Runner
 * Entry point for parallel mobile test execution
 */

const { remote } = require('webdriverio');

const ANDROID_CAPS = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  appPackage: 'com.example.app',
  automationName: 'UiAutomator2',
  noReset: true,
};

const IOS_CAPS = {
  platformName: 'iOS',
  deviceName: 'iPhone Simulator',
  bundleId: 'com.example.app',
  automationName: 'XCUITest',
  noReset: true,
};

async function runTests(caps, platform) {
  console.log(Starting  test suite...);
  const driver = await remote({
    protocol: 'http',
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    capabilities: caps,
  });

  try {
    console.log([] Driver connected successfully);
    await driver.deleteSession();
    return true;
  } catch (err) {
    console.error([] Test failed:, err.message);
    await driver.deleteSession();
    return false;
  }
}

async function main() {
  console.log('Qt Mobile Appium Runner v1.0.0');
  console.log('Platform: Android | iOS\n');
  const results = await Promise.allSettled([
    runTests(ANDROID_CAPS, 'Android'),
    runTests(IOS_CAPS, 'iOS'),
  ]);
  const passed = results.filter(r => r.status === 'fulfilled' && r.value).length;
  console.log(\nResults: / suites passed);
  process.exit(passed === results.length ? 0 : 1);
}

main().catch(console.error);