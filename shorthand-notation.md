# Object Destructuring

Old way:
```js
let instrument = {
  name: "name",
  noise: "noise",
};

let name = instrument.name;
let noise = instrument.noise;
```

Concise Way:

`let { name, noise } = instrument;`

Note that the order of the names between the braces is not important.

You can even use different names for the result:
`let { qux: myQux, foo, bar } = obj;`


Destructuring also works with function parameters:
```js
function xyzzy({ foo, bar, qux }) {
  console.log(qux); // 3
  console.log(bar); // 2
  console.log(foo); // 1
}

let obj = {
  foo: 1,
  bar: 2,
  qux: 3,
};

xyzzy(obj);
```

## GOTCHA
ERROR - { foo, bar, qux } = obj;
FIX: ({ foo, bar, qux } = obj);

If you need to use destructuring elsewhere -- an assignment, for instance -- you can do so. However, you may need to enclose the expression in parentheses. For instance, this code produces a syntax error since, in this context, { marks the beginning of a block rather than destructuring. The fix is easy, but not obvious -- add parentheses:

---


# Spread Syntax versus rest syntax

Spread is for SPREADING out the items and rest is for collecting the REST OF the items into an array.

## Spread Syntax

The spread syntax uses ... to "spread" the elements of an array or object into separate items. In many cases, spread syntax can entirely replace the apply method.
Using the spread syntax can help eliminate some messy looking code, and can also eliminate the need to use apply. The result is easier to type and read.


> Note that spread syntax with objects only returns the properties that Object.keys would return. That is, it only returns enumerable "own" properties. That means, in part, that it's not the right choice when you need to duplicate objects that inherit from some other object. It also means that you lose the object prototype.



Consider this code:

```js
function add3(item1, item2, item3) {
  return item1 + item2 + item3;
}

let foo = [3, 7, 11];

// OLD WAY
add3(foo[0], foo[1], foo[2]); // => 21


// NEW WAY
// THAT LOOKS MESSY, INSTEAD USE SPREAD SYNTAX:
add3(...foo); // => 21
```

## SPREAD SYNTAX USE CASES

```js
// Create a clone of an array
let foo = [1, 2, 3];
let bar = [...foo];
console.log(bar);         // [1, 2, 3]
console.log(foo === bar); // false -- bar is a new array


// Concatenate arrays
let foo = [1, 2, 3];
let bar = [4, 5, 6];
let qux = [...foo, ...bar];
qux;  // => [1, 2, 3, 4, 5, 6]


// Insert an array into another array
let foo = [1, 2, 3]
let bar = [...foo, 4, 5, 6, ...foo];
bar; // => [1, 2, 3, 4, 5, 6, 1, 2, 3]
```
---

# SPREAD SYNTAX WITH OBJECTS

```js
// Create a clone of an object
let foo = { qux: 1, baz: 2 };
let bar = { ...foo };
console.log(bar);         // { qux: 1, baz: 2 }
console.log(foo === bar); // false -- bar is a new object



// Merge objects
let foo = { qux: 1, baz: 2 };
let xyz = { baz: 3, sup: 4 };
let obj = { ...foo, ...xyz };
obj;  // => { qux: 1, baz: 3, sup: 4 }
```

# REST SYNTAX

rest collects multiples items into an array or object

Rest syntax is used most often when working with functions that take an arbitrary number of parameters. 

> Note that the rest element (otherStuff in both examples) must be the last item in any expression that uses rest syntax.

```js
let foo = [1, 2, 3, 4];
let [ bar, ...otherStuff ] = foo;
console.log(bar);        // 1
console.log(otherStuff); // [2, 3, 4]
```

# REST SYNTAX WITH OBJECTS

```js
let foo = {bar: 1, qux: 2, baz: 3, xyz: 4};
let { bar, baz, ...otherStuff } = foo;
console.log(bar);        // 1
console.log(baz);        // 3
console.log(otherStuff); // {qux: 2, xyz: 4}
```



# REST SYNTAX FOR ARGS

```js
function maxItem(first, ...moreArgs) {
  let maximum = first;
  moreArgs.forEach(value => {
    if (value > maximum) {
      maximum = value;
    }
  });

  return maximum;
}

console.log(maxItem(2, 6, 10, 4, -3));
```

# Array Destructuring + rest syntax

```js

// Finally, you can use rest syntax (discussed below) in array destructuring to assign a variable to the rest of an array:

let foo = [1, 2, 3, 4];
let [ bar, ...qux ] = foo;
console.log(bar);   // 1
console.log(qux);   // [2, 3, 4]
```
---

# Array Destructuring

```js
let foo = [1, 2, 3];
let [ first, second, third ] = foo;

// IS EQUIVALENT TO:

let foo = [1, 2, 3];
let first = foo[0];
let second = foo[1];
let third = foo[2];


// YOU CAN SKIP ELEMENTS:

let bar = [1, 2, 3, 4, 5, 6, 7];
let [ first, , , fourth, fifth, , seventh ] = bar;


// YOU CAN ASSIGN MULTIPLE ASSIGNMENTS IN ONE EXPRESSION

let one = 1;
let two = 2;
let three = 3;

//Note that the left-hand side of the "=" uses destructuring syntax, while the right-hand side uses literal array syntax.
let [ num1, num2, num3 ] =  [one, two, three];

console.log(num1);   // 1
console.log(num2);   // 2
console.log(num3);   // 3



// swap the values in two variables:
let one = 1;
let two = 2;

[ one, two ] =  [two, one];

console.log(one);   // 2
console.log(two);   // 1



// Finally, you can use rest syntax (discussed below) in array destructuring to assign a variable to the rest of an array:

let foo = [1, 2, 3, 4];
let [ bar, ...qux ] = foo;
console.log(bar);   // 1
console.log(qux);   // [2, 3, 4]
```







# Concise Property Initializers

let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};

```js
function instrument(name, noise) {
  return {
    name: name,
    noise: noise,
  };
}
```

CONCISE WAY: 

```js
function instrument(name, noise) {
  return {
    name,
    noise,
  };
}
```

You can mix concise + ordinary initializers:
```js
function instrument(name, noise, x) {
  return {
    name,
    noise,
    strings: x,
  };
}
```

---

# Concise Methods


The new concise method shorthand lets you eliminate the : and the word function:


```js
let instrument = {
  play() {
    // play the instrument
  },

  tune() {
    // tune the instrument
  },
}
```

