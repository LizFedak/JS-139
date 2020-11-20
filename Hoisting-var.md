# What is hoisting?

> In the remainder of the curriculum, we will talk about hoisting as 
> though it were a real process. You should consider that as a given in 
> future assignments, quizzes, and assessments. If we ask you about 
> something involving hoisting, don't try to argue that there is no such 
> thing.

JavaScript engines have a creation/compilation phase before the execution phase, which prepares the code for execution. This creation phase is when hoisting occurs. As the 'creation phase' 'reads' the code, each time it encounters a variable, function, or class **declaration**, it adds that **identifier** to the current scope. 

At the end of the creation phase, JavaScript knows all of the identifiers in the program and what scopes they bleong to. (They are not literally moved, but rather are made available as though they were at the top of the code).  

# How do var, let, and const interact with hoisting? How do they differ?

Variable hoisting is different versus function hoisting, and differs if you're looking at a `var` declared variable vs a `let` or `const` declared variable. 

The main differences are in where the variables are hoisted and in what the value or lack thereof is of these variables before the line of code with the value assignemnt. 

With `var` variables, the `var` declaration is hoisted in function scope. Within that function, we can then use the `var` variable anytime, with the caveat that if we use the variable before a value is assigned, the default value will be `undefined`.

On the other hand, `let` and `const` variables are hoisted within their block scope. If you try to access a `let` or `const` variable before it is assigned, however, you will get a `ReferenceError: Cannot access 'variableName' before initialization` instead of `undefined` like with a  `var` variable. There is actually a phrase for this, which is the **Temporal Dead Zone**.


# How do functions and classes interact with hoisting? How do they differ?

Functions have function scope, including the definition of the function, and functions are hoisted 'above' variables in the same scope. 

JavaScript hoists class declarations, with a hoisting style that more closely resembles `let`/`const` variables. By that I mean that the name is hoisted, but it's not initialized, so classes also fall victim to the **Temporal Dead Zone**. Another similarity is that classes have block scope, so they are hoisted to the top of their enclosing block.

Class expressions are NOT hoisted, only class declarations. 
code example: https://launchschool.com/lessons/43f23069/assignments/4fa6b9ff



# What part does hoisting play in the way a specific program works?


----

# Function hoisting GOTCHA

From LS materials:

Though JavaScript functions have function scope, **function hoisting has undefined behavior when the function is nested inside a non-function block.** Don't try to nest functions inside non-function blocks.

```js
function foo() {
  if (true) {
    function bar() {
      console.log("bar");
    }
  } else {
    function qux() {
      console.log("qux");
    }
  }

  console.log(bar);
  bar();

  console.log(qux);
  qux();
}

foo();
```

# General: var, let, const

`let` and `const` statements:
- declare and initialize variables and constants
- declare variables with block scope
- `let` is block scoped

`var`
- predecessor of `let` and `const`
- `var` is function scoped

## DISADVANTAGES of `var`:
- `var` can't create constants like `const` can
- Using `var` on the top level can lead to bugs because it creates a property on the global object


## Interaction with the global object:

When declared at the top level of a program, `var` creates a property on the global object, so we can access `global.propertyName` (or `global.moshi`) from the code example. 

```js
let name = "Liz";
console.log(global.name); // undefined

var moshi = "Moshi";
console.log(global.moshi); // Moshi
```


## Block scope vs function scope

`let` is block scoped
A variable that is block-scoped is only visible in the block where it's declared, i.e. inside of a `{}` curly brace-delimited block.

`var` is function scoped
Function-scoped variables are visible in the functions where they are declared.

```js
function foo() {
  console.log(a); // undefined
  if (true) {
    var a = 1;
    let b = 2;
  }
  
   if (false) {
    var c = 3;
  }
  console.log(a); // 1
  console.log(c); // undefined
  console.log(b); // ReferenceError: b is not defined
}

foo();
```

In this code example, `var a = 1` has function scope. `let b = 2` has block scope. `var c = 3` has function scope. 
Since the `if (true)` block runs, the value for `a` is assigned, but not the value for `c` in the `if (false)` block, so `c` is undefined.


## Why do we care about `var` still?
Many legacy programs contain `var` statements and we'll likely encounter such code.



# Practice problems

```js
var foo = function() {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo();
```

This will log "Bye". This is because the function is hoisted above the variable assignment on line 1, so `foo` is then reassigned. 

```js
for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    var foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);
```


```js
var foo;

for (var index = 0; index < 2; index += 1) {
  console.log(foo);
  if (index === 0) {
    foo = "Hello";
  } else {
    foo = "Bye";
  }
}

console.log(foo);
console.log(index);

```

index 0 // undefined
index 1 // Hello, reassigns to Bye

foo = Bye
index is 2

---

```js
// NO -->

bar();

var bar = function() {
  console.log("foo!");
};


// YES --> 

bar();

function bar() {
  console.log("foo!");
};
```

----

```js
var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar)
}

foo();
```

This logs: NaN
Variable shadowing makes bar undefined the first time we access it on line 213.
We can change it this way so it logs 40:

```js
var bar = 82;
function foo() {
  var bar = globla.bar - 42;
  console.log(bar)
}

foo();
```


```js
function foo(condition) {
  console.log(bar);

  qux = 0.5772;

  if (condition) {
    var qux = 3.1415;
    console.log(qux);
  } else {
    var bar = 24;

    var xyzzy = function() {
      var qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);
```
```js
function foo(condition) {
  let bar;

  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);
```



---

show the effect that hositing has on the code:

```js
var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

console.log(catImage);
console.log(pudding);

```

Booby traps:

- You forget to declare a variable before assigning it.
- You forget to use this when assigning an object property.
- You use a number that begins with 0.
- You attempt to assign a value to a JavaScript keyword or value.