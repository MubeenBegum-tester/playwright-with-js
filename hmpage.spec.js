const {test, expect} = require('@playwright/test');

test('Homepage title', async ({page}) => {

  await page.goto('https://www.demoblaze.com/');

  const pageTitle = page.title();
  console.log('Page title is: ' + pageTitle);

  await expect(page).toHaveTitle('homestore');
  await page.close();
});