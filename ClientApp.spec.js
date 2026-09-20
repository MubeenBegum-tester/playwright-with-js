const {test, expect} = require('@playwright/test');

test('Wait technique in Service based application', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("mubeenbegum.tester@gmail.com");
    await page.locator("#userPassword").fill("Test@2026");
    await page.locator("[value='Login']").click();

    //await page.waitForLoadState('networkidle');        // 'waitForLoadState()' tells playwright "Wait until the page reaches a particular loading state" | 'networkidle' means "Wait until network activity becomes idle".

    /*
        await page.waitForLoadState('networkidle')
        "It tells Playwright to wait until the page reaches the networkidle load state, meaning network activity has become idle, before continuing with the next test step. However, I would use it only when it's actually needed because Playwright's locators and assertions already provide automatic waiting."
    */

    await page.locator('.card-body b').first().waitFor();      // waitFor() tells Playwright to wait until the locator satisfies the requested state.

    const titles = await page.locator('.card-body b').allTextContents();

    console.log(titles);
}
    /*
        DIFFERENCE BETWEEN waitForLoadState('networkidle') AND waitFor()
        ----------------------------------------------------------------
        "waitForLoadState('networkidle') waits for the page's network activity to become idle, whereas locator.waitFor() waits for a specific element represented by the locator to reach a particular state, which is visible by default. They operate at different levels: one is page/network-level and the other is element-level."
    */

)