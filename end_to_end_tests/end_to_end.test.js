const { chromium } = require('playwright');
const app = require('../api/server.js');

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
  await page.goto('http://localhost:3000');
});
afterEach(async () => {
  await page.close();
});

describe("Test can start a list and retrieve it later", () => {

  it('has Page title "To-Do"', async () => {
    // Edith has heard about a cool new online to-do app. She goes
    // to check out its homepage
    // She notices the page title and header mention to-do lists
    // assert 'To-Do' in browser.title
    expect(await page.title()).toBe('To-Do');
  });

  it('has an Input Box with Placeholder Text', async () => {
    // # She is invited to enter a to-do item straight away
    const placeholderText = await page.$eval(
      '.new-item-form',
      el => el.placeholder
    );
    expect(placeholderText).toEqual('Enter a to-do item');
  });

  it('has no elements present before posting', async () => {
    const table = await page.$('.list-table');
    const tableRows = await table.$('li');
    const innerHTML = await tableRows.innerHTML();
    expect(innerHTML).not.toContain("Buy peacock feathers");
  });

  it('stores a list element', async () => {
    // She types "Buy peacock feathers" into a text box (Edith's hobby
    // is tying fly-fishing lures)
    await page.fill('.new-item-form', "Buy peacock feathers");
    // When she hits enter, the page updates, and now the page lists
    // "1: Buy peacock feathers" as an item in a to-do list
    await page.press('.new-item-form', "Enter");
    const table = await page.$('.list-table');
    const tableRows = await table.$('li');
    const innerHTML = await tableRows.innerHTML();
    expect(innerHTML).toContain("Buy peacock feathers");
  });

  // There is still a text box inviting her to add another item. She
  // enters "Use peacock feathers to make a fly" (Edith is very methodical)
  //
  // The page updates again, and now shows both items on her list
  //
  // Edith wonders whether the site will remember her list. Then she sees
  // that the site has generated a unique URL for her -- there is some
  // explanatory text to that effect.
  //
  // She visits that URL - her to-do list is still there.
  //
  // Satisfied, she goes back to sleep
});
