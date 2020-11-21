# Side Effects

A function call that performs any of the following actions is said to have side effects:

It reassigns any non-local variable.
It mutates the value of any object referenced by a non-local variable.
It reads from or writes to any data entity (files, network connections, etc.) that is non-local to your program.
It raises an exception.
It calls another function that has side effects.


While it's common to speak of functions as having side effects, it's more correct to talk about whether a specific function **call** has any side effects.
A function might have no side effects when given certain arguments, but that same function might have side effects when called with other arguments.

Nevertheless, we will often talk about side effects as a general characteristic of some functions. 

If the function can have side effects when used as intended, then we say the function itself has side effects. In practice, functions that have side effects have them regardless of what arguments are passed in.



What does "used as intended" mean in the previous paragraph? That's just a way of saying that the function is being called in a manner and time that makes sense:

If a required argument is omitted, the function isn't being used as intended.
If you pass an array to a function that expects a number, the function isn't being used as intended.
If you call a function before you've done any required preparations (such as opening a connection to a remote server), the function isn't being used as intended.





# Gotchas with reassignment
- Side Effects Through Reassignment
- Side Effects Through Mutation
- Side Effects Through Input/Output
- Side Effects Through Exceptions
- Side Effects Through Other Functions

## Side Effects Through Reassignment


These are the easiest side effects to spot when looking at a function. If the function reassigns any variable that is not declared inside the function, the function has a side effect. For instance:

```js
let number = 42;
function incrementNumber() {
  number += 1; // side effect: number is defined in outer scope
}
```

In this example, incrementNumber changes the value of the number variable. Since number is declared in the outer scope, it isn't local to the function. Thus, the reassignment is a side effect.


## Side Effects Through Mutation

```js
let letters = ['a', 'b', 'c'];
function removeLast() {
  letters.pop(); // side effect: alters the array referenced by letters
}
```

## Side Effects Through Input/Output
Reading from a file on the system's disk
Writing to a file on the system's disk
Reading input from the keyboard
Writing to the console
Accessing a database
Updating the display on a web page
Reading data from a form on a web page
Sending data to a remote web site
Receiving data from a remote web site
Accessing system hardware such as:
The mouse, trackpad, or other pointing devices
The clock
The random number generator
The audio speakers
The camera

## Side Effects Through Exceptions

If a function can raise an exception and doesn't catch and handle it, it has a side effect:

```js
function divideBy(numerator, denominator) {
  if (numerator === 0) {
    throw new Error("Divide by zero!"); // side effect: raises an exception
  }

  return numerator / denominator;
}
```


## Side Effects Through Other Functions
Suppose a function invokes another function, and that invoked function has a side effect that is visible outside of the calling function. In that case, the calling function also has a side effect. We've actually seen several situations where a function calls another function that has side effects:

- console.log has a side effect.
- readline.question has multiple side effects.
- new Date() has a side effect (it accesses the system clock).
- Math.random() has a side effect (it accesses the random number generator)







Mixing Side Effects and Return Values
We've discussed this before, but it bears repeating: most functions should return a useful value or they should have a side effect, but not both. If you write functions that do both, you may have trouble remembering one of those -- either you'll forget about the side effect, or you'll forget that there's a return value that you need to examine.

By "useful value," we mean that the function returns a value that has meaning to the calling code. For instance, a sum function should probably return a number that contains the result of adding some numbers together. A function that returns an arbitrary value or that always returns the same value is not returning a useful value.

There are exceptions to the rule about mixing side effects and return values. There are times when you have to have a side effect and return a useful value. For instance, if you read something from a database, you almost certainly have to return a value. If you read some input from the user's keyboard, you probably have to return a value. Yet, both operations -- accessing a database and reading user input -- are side effects. In the user input example, you may also need to write some output to the console, which is another side effect.





Pure Functions
Pure functions are functions that:

- Have no side effects.
- Always return a value that is dependent on the arguments it is passed.
- Given the same set of arguments, the function always returns the same value during the function's lifetime.




The consistent return value is possibly the most important feature of pure functions. The fact that the same arguments always produce the same return value implies that nothing else in the program can influence the function during the function's lifetime. This is a lot more nuanced than it sounds, but we won't get into those details.




A function's **lifetime** begins when the function is created.




https://launchschool.com/lessons/43f23069/assignments/a200fbec



const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

Side effects: array is mutated
sentence is logged to the screen



Examples of pure functions:


function sum(a, b) {
  return a + b;
}


Only function 3 is a pure function: it returns a useful value, has no side effects, and it always returns the same value given the same pair of arguments. The remaining functions are impure:

Function 1 logs something to the console. It has a side effect.
Function 2 does not return a useful value. undefined is not considered a useful value unless it is dependent on the arguments.
Function 4 uses the random number generator, so it has a side effect.
Function 5 returns a seemingly useful value, but it isn't dependent on the function arguments.




