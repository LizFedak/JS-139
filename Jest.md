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

You can also negate an assertion by chaining the not property on the object returned by `expect` by using `.not`:

```js
test('car has wheels', () => {
  let car = new Car();
  expect(car.wheels).not.toBeUndefined();
});
```

