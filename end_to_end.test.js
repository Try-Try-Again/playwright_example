const { chromium } = require('playwright');
const app = require('./api/server.js');
let browser;
let page;
beforeAll(async () => {
  server = app.listen(3000)
  browser = await chromium.launch();
});
afterAll(async () => {
  server.close()
  await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});
it('server smoke test', async () => {
  await page.goto('http://localhost:3000');
  expect(await page.title()).toBe('Hello, World!');
});
