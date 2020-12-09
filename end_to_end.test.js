const { chromium } = require('playwright');
let browser;
let page;
beforeAll(async () => {
  browser = await chromium.launch();
});
afterAll(async () => {
  await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});
it('server smoke test', async () => {
  await page.goto('http://localhost:8000');
  expect(await page.title()).toBe('Hello, World!');
});
