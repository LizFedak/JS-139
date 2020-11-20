**regression** - an event that causes previously working code to stop working after a change to your code or your environment, i.e. it 'regresses' to an earlier development state

We write tests so we can change things without having to verify if they still work later.

You can write tests before, during, or after you write the code.

We are learning 'unit testing' in LS.

LS:
> Regression tests check for bugs that occur in formerly working code after you make changes somewhere in the codebase. Using tests to identify these bugs means we don't have to verify that everything works manually after each change.


**Test Suite** - The entire set of tests that go with your program or application. i.e. if you have a `sieve.js` file and a `sieve.test.js` file with all of your tests, that second file is your test suite.

**Test** - AKA specs, tests are the specific situations that you want to test in your program, and they can have multiple assertions.

**Asserstions** - Assertions, AKA expectations, are what confirm whether the program does what it is supposed to do. 


Example:
```js
describe("The Human class", () => {
  test("human has a name", () => {
    let human = new Human("Liz");
    expect(human.name).toBe("Liz");
  });
});
```


JEST SYNTAX

`PASS` - Indicates that you passed all tests in the test file.







# Things that are NOT covered:

Test-Driven Development
Test-Driven Design
Behavioral Driven Development
Acceptance Test-Driven Development
Testing with a web development library (Like Express)
Test-first vs test-after
How testing influcences design choices

# Testing Jargon

"Did the PR pass continuous integration tests?"
"I feel our functional tests are getting redundant, given our integration tests."
"What ATDD tool do you like?"
"Does your team practice TDD?"
"I write unit tests, but not controller tests."