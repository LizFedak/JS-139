To install JEST, we use npm. The command is:

```bash
npm install jest -g
```

We can use the 'list' command to see what version of jest we have.

```bash
npm list -g jest
```

We can optionally install Jest locally, but it's advised to install it globally. Local packages or virtual environments can let us use specific versions of Jest depending on the project.

To run a jest test, we first need to create a configuration file, then we run the jest CLI with the command `jest` + filename (although you can also run `jest` without the filename*). The filename should have the format `name.test.js`. Jest requires the `.test.js` file extension (and it's useful to tell that it's a test file). The configuration file name should be `jest.config.js`, `jest.config.ts`, or `package.json`, or can be configured with a command line command `--config <path/to/file.js|ts|cjs|mjs|json>`. For basic testing, the file does not require any content to use the default config, but it's possible to specify further options in the config file.

* If you run jest in the terminal without an explicit file argument, it will run all of the `.test.js` files and summarize the success/failure.

Example:
- temp.test.js (test file)
- test.js (code)
run: jest temp.test.js

# What's in the Test File

We need to import the code from the module that we're testing so we can create an instance of the class we're testing or invoke the functions etc. 

Then we write our tests using Jest syntax. We don't need to import anything to the test file to use Jest since we are going to run it using the `jest` CLI, which makes all the necessary Jest library methods available to the test file.


We use a few Jest methods:

`describe` - The describe method groups your tests. We pass it a string and a callback + write our tests inside the callback while the string argument describes the group of tests. (`describe` is optional but good practice)

`test` method - Each invocation of `test` defines a new test. `test` takes a string and a callback. The string is for a description of the test.

To run a test, we need to set up data that is needed for the test. 

We can set up our class instances or repeat variables/objects etc to be used on each test without copying and pasting the code by using the `beforeEach` callback, which is used before running each test. 

or we can instantiate any data needed inline in the test code.

Each test has **assertions**, which confirm the behavior we are trying to verify in our code. To make an assertion, we use Jest's `expect` method. We pass a value to `expect`, AKA the **actual value** to assert the value. Then, we use a **matcher** method on the return object from the `expect` method call. The matchers, like `toBe` or `toEqual` check if the return value of `expect` with the **actual value** matches the argument in the matcher. If it does, the test passes.

> You use the `expect` function each time you want to test a value, almost always in conjunction with a matcher function that asserts something about the value. The `toBe` matcher is the most common expectation matcher.

We can also skip tests in our test cases. This is useful since we might write tests before the code is actually working or even available, so we can skip them instead of having them show as failing. The syntax to skip a test is either to write `xtest` instead of `test` OR {THE OTHER OPTION HERE}

Examples of tests - https://launchschool.com/lessons/2b72565b/assignments/42526e8b

You can also negate/invert an assertion by chaining the not property on the object returned by `expect` by using `.not`:

```js
describe("New wine objects work as expected", () => {
  test('two new wine objects with args are not equal objects', () => {
    let wine1 = new FrenchWine("Grenache", 6);
    let wine2 = new FrenchWine("Malbec", 3);
    expect(wine1).not.toEqual(wine2);
  });
  .
  .
  .
```

---
# toBe and toEqual
`toBe` and `toEqual`

We use `expect(...).toBe` to write an expectation about the equality of two values. The `expect` function should be used each time we need to test a value, usually paired with a ***matcher*** function that asserts something about the **actual value**. `toBe` is the most common and versatile matcher.


Matcher practice used in the `wine.js` and `wine.test.js` files.

Some other common matchers are:

|**Matcher**|**Description**|
|:-----------|:-------------------|
|`toBe`|Fails unless actual value === expected value --- toEqual compares the properties of one object with those of the other|
|`toEqual`|Same as toBe but can also test for object equality, e.g., {a: 1} is equal to {a: 1}|
|`toBeUndefined`|Fails unless the actual value is undefined. Same as toBe(undefined)|
|`toThrow`|Fails unless the expression passed in to expect raises/throws an error|
|`toBeNull`|Fails unless the actual value is null. Same as toBe(null)|
|`toBeTruthy`|Fails unless the actual value is truthy|
|`toContain`|Fails unless the given array includes a value|
|`toMatch`|use with a regex pattern|

expect(kitty.miaow()).toContain(' is miaowing.');
expect(kitty.miaow()).toMatch(/ is miaowing\./);

# SEAT approach

- Set up the necessary objects./
Instantiate any objects that will be used in the tests.

- Execute the code against the object we're testing. / Run code against the object being tested.

- Assert the results of execution. / Affirm the results of code execution.

- Tear down and clean up any lingering artifacts./ Clean up any lingering artifacts.

SEAT is a 4-step outline on best practices for writing tests. 

We can rewrite the `wine.test.js` file as seen in `wine2.test.js` with the `beforeEach` method to create objects that we can reuse in our code extracted into this method instead of copying and pasting code into each of the tests for intializing test objects. This satisfies the "S" step of the SEAT approach, "set up the necessary objects". It's best to create a new object for each test in case a previous test mutates the data and we are testing with unpredictable data which can skew the results and give a false fail/pass result.

In the code, we declare the variable `wine` outside of the `beforeEach` callback, then assign it inside the callback. This is so the test callbacks have access to the variable thanks to lexical scoping.

---

At minimum, we need to run tests with "E" and "A" steps.






# Writing tests:

refer to the wine2.test.js file

- Build the beforeEach method for applicable tests
- If you need MORE tests, write them directly into the test
- Determine which tests make the most sense to test each of the public methods
- make sure the class is exported from the code file + imported into the test file
- make sure there is a test config file (`jest.config.js`)


- Can write extra assertions in one test

Example from todo list:
https://launchschool.com/lessons/2b72565b/assignments/f6905bb9

File here: 
under the exercises, 
todo.js todolist.js and todolist.test.js
also: 
wine.js and wine2.test.js in the Code folder








# Code coverage

Run a command like this to check Jest's take on code coverage:
`jest --coverage wine.test.js`

The code covering metric is one way to gauge code quality and reliability, but it is not an iron proof solution, because it doesn't tell us whether our code works correctly, but rather that it works with the test cases we write and what percentage of the lines of code are covered in test cases. 

For example, with the `wine.test.js` file, all tests pass, but lines 10-11 are uncovered in tests. Lines 10-11 are a new method that was added that has no test cases written for it. Because those lines are covered, Jest estimates that about 75% of the code is covered based on the number of lines that were executed at least once during testing. The `openBottle` method was not executed during testing. 


From LS:
> You can find a more detailed report by looking at the file coverage/lcov-report/index.html with your browser. This page shows a table that summarizes the same information that is shown in the terminal. However, the file names are clickable. If you click on one of the files, you can see a color-coded image of your code that shows how many times you executed each line (the green highlights to the right of the line numbers) and which lines were not tested (shown in red).


T step -->


LS text:
> Likewise, The afterEach callback, if present -- we don't have one -- is called after running each test. We don't have any need for a teardown, so don't need the callback. In other cases, we may need a teardown to clean up files, log some information, or close a database connection.


JEST API 
https://jestjs.io/docs/en/api


As you move forward, don't forget the following:

- Jest is the most popular testing library for JavaScript.
- A test suite contains many tests. A test can contain many assertions.
- Use the toBe and toEqual matchers liberally, but don't be afraid to look up other assertions when needed.
- Use the SEAT approach to writing tests.
- Use code coverage as a metric to gauge test quality. (But remember that it's not the only metric.)
- Practice writing tests -- it's easy!





Assertion
A verification step to confirm that the results returned by a function call or an expression match the expected results.

Test Suite
A group or set of situations or contexts within which verification checks are made.

Test
A situation or context in which verification checks are made. For example, making sure you get an error message after trying to log in with the wrong password. May require multiple steps.



Using toThrow

expect(new Cat()).toThrow() 
Running this test may raise an error before jest is able to catch it. If an error occurs in the constructor, it will halt the program before toThrow() runs.


expect(() => new Cat()).toThrow();
Use this syntax with the new Cat as IIFE in parens