module.exports = {
  command: 'npm start',
  launchOptions: {
    headless: true
  },
  contextOptions: {
    ignoreHTTPSErrors: true,
    viewport: {
      width: 1920,
      height: 1080
    }
  },
  browsers: ["chromium"],// "firefox"],
  devices: []
}
