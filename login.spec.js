const {test, expect} = require('@playwright/test');

test('TC01 - Valid Login', async ({page})=> {

    
    await page.goto('https://the-internet.herokuapp.com/login');

    //Enter username (correct)
    await page.locator('#username').fill('tomsmith');

    //Enter password (correct)
    await page.locator('#password').fill('SuperSecretPassword!');

    //Click Login
    await page.locator('button.radius').click();

    //Verify error message
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');

});

test('TC02 - Invalid Login', async ({page})=> {

    await page.goto('https://the-internet.herokuapp.com/login');

    //Enter username (correct)
    await page.locator('#username').fill('tomsmith');

    //Enter password (Incorrect)
    await page.locator('#password').fill('wrongpassword');

    //Click Login
    await page.locator('button.radius').click();

    //Verify error message (this should fail)
    await expect(page.locator('#flash')).toContainText(invld);

});