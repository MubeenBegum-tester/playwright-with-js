const {test} = require('@playwright/test');
// require() is a Node.js function used to import something from another module/package.

/* require('@playwright/test') imports the Playwright testing library (from node_modules), 
 which provides tools for writing and running tests for web applications. */

 /* require('@playwright/test') means "Load the Playwright Test package so I can 
 use its functionality in this file." */

 //@playwright/test is Playwright's test framework.

 /* Framework = a ready-made structure + tools + rules that help you develop or test 
 an application efficiently. */

/* interview-friendly definition you can remember:
        "A framework is a predefined structure and set of tools that provides guidelines and 
reusable components to develop or test applications efficiently."
*/

// {test} = it says "I want to use the 'test' function from the Playwright testing library."

/* {test} is object destructuring in JavaScript.
    "From the Playwright package, give me only the 'test' property and store it in a 
    variable called 'test'." */

/* const playwright = require('@playwright/test');
   playwright.test('Test Case Name', async () => { ... });
   This is the LONG FORM of importing and using the 'test' function. */

/* const {test} = require('@playwright/test');
   This is the SHORT FORM of importing and using the 'test' function. */

test('First Playwright test', async () => {   // if function does not have name, it is called an anonymous function. so instead of writing function() { ... }, we can write () => { ... } which is called an arrow function.
    // This is a test case named "First Playwright test".
    // async () => { ... } is an asynchronous function that allows us to use 'await' inside it. 

    /* The test function takes two arguments: the name of the test and an async function 
    that contains the test logic. */
    
    // Inside the test, we can write code to perform actions and assertions on a web application.

    // The 'async' keyword indicates that the function will perform asynchronous operations,
    // allowing us to use 'await' to wait for promises to resolve before proceeding.
});

//-------------------------------------------------------

//  PLAYWRIGHT TEST STRUCTURE - SYNTAX

/*
const {test,expect} = require('@playwright/test');
test('Test Case Name', async () => {

});
*/
