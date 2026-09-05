const {test, expect} = require('@playwright/test')


/** test('Locators test case', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());

    //Playwright supports CSS Selectors

    /*
    If id is present
    CSS -> tagname#id or #id

    If class attribute is present
    CSS -> tagname.class or .class

    Write CSS based on any attribute
    CSS -> [Attribute='value']

    Write CSS with traversing from Parent to Child
    CSS parenttagname >> childtagname

    If needs to write the locator based on the text
    text=' '
    **/

    /*
      <input type="text" name="username" id="username" class="form-control">
      
      Here the Attributes are" type, name, id, class
      
      Here the tag name is: input
     */


     /** await page.locator('#username').fill("rahulshetty");
      await page.locator("[type='password']").fill("learning");
      await page.locator("#signInBtn").click();
      // await page.locator("[style*='bocker']");  //wait untill the locator shown up the error page // instead of writing "style=display:'block'" we can write partial value by using regual expression *, "style*='block'"
      console.log(await page.locator("[style*='block']").textContent()); // prints the error message on console // textContent() method will extract the text contain on the locator error message
      await expect(page.locator("[style*='block']")).toContainText('Incorrect'); // if locator text is matching with expected toContainText content then it will pass else it fails
     */ 


test('TC01 - Invalid login should display Incorrect message', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    console.log(await page.title());

    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator("[type='password']").fill('Learning');
    await page.locator('#signInBtn').click();

    console.log(await page.locator("[style*='block']").textContent());

    // Correct expectation → PASS
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
});


test('TC02 - Invalid login should display Inrect message', async ({ page }) => {

   // const context = await browser.newContext();
   // const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    console.log(await page.title());

    await page.locator('#username').fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    await page.locator('#signInBtn').click();

    console.log(await page.locator("[style*='block']").textContent());

    // Deliberately incorrect expectation → FAIL
    await expect(page.locator("[style*='block']")).toContainText('Inrect');
});