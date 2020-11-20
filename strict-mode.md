# Strict Mode

In JavaScript, **strict mode** can be enabled by writing `use strict` in the code file. Strict mode is an optional mode that modifies the semantics of JavaScript and prevents some types of errors and syntax issues.

# What is strict mode? How does it differ from sloppy mode?


Strict mode is a **pragma**, which is short for pragmatic information, and is a compiler directive. It's pragmatic information about how to interpret the code that follows. Pragmas are not part of the language, so the syntax can be odd, much like `'use strict'`. 


makes three changes to JavaScript semantis:

- Some types of 'silent' errors throw errors instead of just running the code. 
- Some types of code can inhibit optimization in your code. That type of code is prevented by strict mode.
- Strict mode prohibits using names and syntax that might conflict with future versions of JavaScript.

Those three changes combined result in many benefits, such as:
- bug mitigation
- debugging is easier
- code can be faster
- save the future: potential conflicts can be avoided instead of dealt with later.


# How do you enable strict mode at the global or function level?

There are two ways to enable strict mode. At the global level, you can write `'use strict';` at the top of the program file. It must be at the top of the file, not part way through. 

At the function level, you can write `'use strict';` at the top of the function. Nested functions inherit strict mode from the surrounding scope. It must be at the top of the function, not partway through the function. 

Once you enable strict mode, you can't disable it later in the same program or function.

Strict mode is enabled by default in the body of a `class`.

# Describe how code behaves under both strict and sloppy mode.

1. Strict mode is lexically scoped, so it only applies to the code that enables it. As you can see below, inside of the `sayBye` function, `sayHello` is called with 'sloppy' mode, but the sayHello function is executed in strict mode.

```js
function sayHello() {
  'use strict'
  // all of the code here will be in strict mode
}
function sayBye() {
  sayHello(); //invocation is 'sloppy', but `sayHello` runs in strict mode
}
```

2. Strict mode disables the behavior of JavaScript defining undeclared variables as properties of the global object. Instead, it throws a ReferenceError. If you actually want a global variable, define it explicitly instead.

```js
"use strict";

function foo() {
  bar = 3.1415; // ReferenceError: bar is not defined
}

foo();
console.log(bar);
```

Helps with:
- Finding typos where you are trying to reassign a variable later in the program.

3. Strict mode changes implicit execution context of functions to be `undefined` instead of the global or window object. Thus, if you lose execution with a method and are assigining a value to a property, it will throw a `TypeError` instead of assigning the value to a global property.

4. Number 4 is number 3 except instead of losing execution context, if you just forget to use this in the first place in your method, you'll be assigning a property to the globla object unless you use strict mode. It will throw a `ReferenceError` that it is not defined instead. 

5. Strict mode fixes a very specific error that can occur with leading zeros. In sloppy mode, it's possible for JavaScript to read a number like `01234567` as an octal number. This is because it does not have an 8 or 9 in it. In `strict mode`, octal-looking numbers raise an error. `SyntaxError: Octal literals are not allowed in strict mode.`. 


Pasted FROM LS material:

- prevents you from using function declarations in blocks.
- prevents declaring two properties with the same name in an object.
- prevents declaring two function parameters with the same name.
- prevents using some newer reserved keywords, such as let and static, as variable names.
- prevents you from using the delete operator on a variable name.
forbids binding of eval and arguments in any way.
- disables access to some properties of the arguments object in functions.
- disables the with statement, a statement whose use is not recommended even in sloppy mode.

# When is strict mode enabled automatically?

Strict mode is enabled by default in the body of a `class`.

# When should you use (or not use) strict mode?

It is recommended that `strict mode` be used in any new code. As well, it is wise to use strict mode at the function level in new functions in old codebases; however, that is the only scenario where you should use strict mode in old codebases in case it causes a regression in otherwise working code.




---

Practice problems

```js
'use strict' 

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  let allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let counter = 0; counter < 0400; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());
```