const {test} = require('@playwright/test');

test('Browser Context Playwright test', async ({ browser }) => 
    {
        // chrome - plugin/cookies
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/learning-paths');
    });

test('Page... Playwright test', async ({ page }) => 
    {
        await page.goto('https://rahulshettyacademy.com/learning-paths');
    });