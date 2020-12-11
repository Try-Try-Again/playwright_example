const { chromium } = require('playwright');
const app = require('./api/server.js');

let browser;
let page;
let server;

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


it('Page title is "To-Do"', async () => {
	// Edith has heard about a cool new online to-do app. She goes
	// to check out its homepage
  await page.goto('http://localhost:3000');
	// She notices the page title and header mention to-do lists
	// assert 'To-Do' in browser.title
  expect(await page.title()).toBe('To-Do');
});
// # She is invited to enter a to-do item straight away
it('Finish the Test!', () => {
  throw new Error('Finish the Test!');
});
//
// # She types "Buy peacock feathers" into a text box (Edith's hobby
// # is tying fly-fishing lures)
//
// # When she hits enter, the page updates, and now the page lists
// # "1: Buy peacock feathers" as an item in a to-do list
//
// # There is still a text box inviting her to add another item. She
// # enters "Use peacock feathers to make a fly" (Edith is very methodical)
//
// # The page updates again, and now shows both items on her list
//
// # Edith wonders whether the site will remember her list. Then she sees
// # that the site has generated a unique URL for her -- there is some
// # explanatory text to that effect.
//
// # She visits that URL - her to-do list is still there.
//
// # Satisfied, she goes back to sleep
