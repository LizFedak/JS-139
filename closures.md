# What is a closure?

// LS text - https://launchschool.com/lessons/43f23069/assignments/3df10c91

As we've learned, functions combine with the context at their definition point to form closures. A closure lets a function access its definition context regardless of when and where the program invokes the function.
//


Closures let a function access a variable that was in scope at the function's definition point even when that variable is no longer in scope. 

MDN defines closure as "the combination of a function and the lexical environment within which that function was [defined]." You can think of closure as a function combined with all of the variables in its lexical scope, including function and class names.




# What is in a closure?

A function has access to its own inner and to its outer scope. You can call a function in itself (recursion). 

# When is a closure created?

Closures are created when you define a function or method. The closure essentially closes over its environment -- what's in scope. In effect, the function definition and its scope become a single entity called a closure. When the function is invoked, it has access to everything in its environment. That is, it can use any variable that was in the lexical scope where the function was defined. Even if those variables aren't in the lexical scope where you invoke the function, it can still access them.


# What is the relationship between closures and scope?

Closure and scope are lexical concepts. Functions rely on their own closure when called inside of other scopes, which can lead to unexpected results. 

```js
let band = "Arms and Sleepers";

function playMusic() {
  console.log(band);
}

function goToConcert() {
  let band = "Nils Frahm";
  playMusic();
}

goToConcert(); // Arms and Sleepers

```


# What do we mean when we say that closures are defined lexically?

We mean that the pointers to variables are determined when the function is created, not from where the function is called. The source code determines the closure.

# What is partial function application?


```js
function dogMaker(breed) {
  let legs = 4;
  return function(name) {
    return function() {
      console.log(`${name} is a ${breed} with ${legs} legs`);
    }
  }
}

let gsp = dogMaker("GSP");
let moshi = gsp("Moshi");
moshi();
```

THIS IS SEVERIN'S BLOG POST VERBATIM WITH MY VARIABLES SUBBED - 
https://medium.com/launch-school/javascript-weekly-making-sense-of-closures-daa2e0b56f88

Here, we have a function called dogMaker, which has a single parameter that expects a name string. This function then returns another function, which accepts an name as its parameter. Finally, this function itself returns a final function, which when called, logs a string describing the dog's breed and name. That’s a lot of functions, so let’s try to follow what is happening.

First, we call `dogMaker` with the argument "GSP" and it gives us a new function, which we assign to the variable `gsp`. For its part, `gsp` closes over the variable `breed`, which contains the value of `“GSP”`, and therefore retains permanent access to it. We then call `gsp` with the argument `'Moshi'`, which it assigns to the variable `name`, and it in turn returns another function that is going to describe our dog. Now, we have a function called `moshi` that has, in effect, closed over two levels of scope, thus giving it access to both the `breed` and `name` variables. And indeed, when we call `moshi`, the message “Moshi is a GSP with 4 legs” is logged to the console.

--- 

JavaScript uses ***lexical scoping*** for functions, which means that functions are executed using the variable scope that was in effect when the function was defined.

To implement lexical scoping, the internal state of a JavaScript function object has to include the code of the function and references to the scope where the function definition appears. 

The combination of a function object and a scope (i.e. a set of variable bindings) in which the function's variables are resolved is called a **closure**. 

All JavaScript functions are closures, but it doesn't always matter that a closure is involved. Rather, they are important when functions are invoked from a different scope than the one they were defined in.



---

Closures are a lexical feature, not a runtime feature. 

