# Immediately Invoked Function Expressions (IIFE)

## What are IIFEs?
An IIFE (immediately invoked function **expression**) is a function that you define and invoke simultaneously. 

They are defined with a special syntax, usually with a pair of parentheses around the function expression, then invoked with another set of parentheses:

```js
// Normal function:
function helloworld() {
  console.log("Hello world");
}

// IIFE function:
(function() {
  console.log("Hello world");
})();
```

We add the parentheses to avoid syntax errors, but it's not ***always*** necessary. On the other hand, it does make your code more clear to use parentheses for IIFE's even when unecessary.

Parentheses do not change the value of anything, but they act as a grouping control, i.e. the order of evaluation of your code. Think PEMDAS.


## How do you use them?

To use an IIFE, add sets of parentheses both to enclose the function, then immediately following the function as shown in the code example. 

```js
// IIFE function:
(function() {
  console.log("Hello world");
})()
```

While you could write an IIFE as seen below, it is more clear to use the former example. In the first example below, the parentheses used to invoke the function is nested in the enclosing parentheses that surround the function expression. In the second example, the function expression is assigned to a variable.
```js
(function() {
  console.log('hello');
}());

let foo = function() {
  return function() {
    return 10;
  }() + 5;
}();
```

Better:
```js
let foo = (function() {
  return (function() {
    return 10;
  })() + 5;
})();

console.log(foo);       // => 15
```

Arrow functions don't have names, so it's not usually necessary to use them in IIFEs. https://launchschool.com/lessons/43f23069/assignments/acf35c08


--

We can also pass values into an IIFE as an argument.

```js
(function(array) {
  array.forEach(name => console.log(name));
})(["Liz","Moshi","Fernand"]);

```

## How do you use IIFEs to create private scopes?

If you are adding code to a messy codebase, we can use function scope so we don't have to worry about variable or function name clashes. 

We don't want to overwrite existing variables, raise errors, or have an issue with a previously declared function name.

All of that said, an IIFE is the safest bet because it'll create private scope for the variables that we need to declare so they don't clash with any previously defined variables of the same name in an outer scope. The IIFE will also be unnamed, so it won't clash with any names. 



## How do you use blocks to create private scopes?

## How do you use IIFEs to create private data?