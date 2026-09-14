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

   console.log(await page.locator(".card-body a").first().textContent()); //it will tell that get me the first element from the array list(ex, if the page has 4 elements the first element will be n(0) then n(1) n(2) n(3), so if we ask for the first element it gives n(0))
   console.log(await page.locator(".card-body a").nth(1).textContent()); // n(1) means it extracts second element from the array list, we can just wright first or last rest of elements we should give n(number of arraylist)

});