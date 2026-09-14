const{test,expect} = require("@playwright/test");

test("Extract multiple web elements", async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await userName.fill("rahulshetty");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await signIn.click();

    console.log(await page.locator("[style*='block']").textContent());
    await expect(await page.locator("[style*='block']")).toContainText("Incorrect");

    await userName.fill("");   // it will erase previously entered username
    await userName.fill("rahulshettyacademy");  // entering new username
    await signIn.click();

    //console.log(await page.locator(".card-body a").textContent()); // it will give an error as "Strict mode violation: ".card-body a" resolves to 4 elements
    /*
    CSS traversing from parent to child:
    parenttagname-space-childtagname (eg: ".card-body a" here parenttagname=card-body, childtagname=a)
    **/

   console.log(await page.locator(".card-body a").first().textContent());
   console.log(await page.locator(".card-body a").nth(1).textContent());

});