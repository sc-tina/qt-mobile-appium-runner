# Qt Mobile Appium Runner

> A lightweight, parallelized mobile app automation runner powered by **Appium**, designed for fast and reliable Android & iOS UI testing.

## Features

- **Parallel Execution**: Run multiple device/emulator tests simultaneously to reduce CI pipeline time
- **Screenshot Capture**: Auto-capture screenshots on test failure for faster debugging
- **CI/CD Ready**: Native integration with GitHub Actions, Jenkins, GitLab CI
- **Flexible Config**: JSON-based device and capability configuration
- **Cross-Platform**: Works on macOS, Linux, and Windows

## Tech Stack

- Node.js 18+ | Appium 2.x | WebDriverAgent (iOS) | UiAutomator2 (Android)
- Mocha test framework | Chai assertions

## Quick Start

\\\ash
npm install
npm run test:android   # Run Android tests
npm run test:ios      # Run iOS tests
npm run test:parallel # Run on all devices in parallel
\\\

## Configuration

Edit \config/devices.json\ to add your target devices and Appium server endpoints.

## Contact & Support

- **WhatsApp**: @along915
- **Gmail**: ailong9281@gmail.com
- **Telegram**: @Alongyun
- **Official Website**: https://www.qtphone.com/

---

*Part of the QtPhone open-source QA toolchain — built for modern mobile developers.*