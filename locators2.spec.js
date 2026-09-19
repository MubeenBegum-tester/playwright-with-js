const{test, expect} = require("@playwright/test");

test("Extract all elements from the page", async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator("#username");               // no need to give await for Locator creation
    const pwd = page.locator("[type='password']");           // "
    const signIn = page.locator("#signInBtn");         // "

    const cardTitles = page.locator(".card-body a");  //“I store the locator in a variable called cardTitle so I can reuse it multiple times.”

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await userName.fill("");                       // await should be added here
    await userName.fill("rahulshettyacademy");     // "
    await pwd.fill("Learning@830$3mK2");           // "
    await signIn.click();   // here now logged in successfully

    //After login it takes sometime to load the complete page

    console.log(await cardTitles.first().textContent());  // Here, I am reusing the cardTitle locator.
    console.log(await cardTitles.nth(1).textContent());     // Here, I am reusing the cardTitle locator.

    const allTitles = await cardTitles.allTextContents();

    console.log(allTitles);



});