# Partial function application


https://medium.com/launch-school/javascript-weekly-making-sense-of-closures-daa2e0b56f88
Partial function applications, are functions that have pre-applied parameters and return another function that you then call with parameters that still use the parameter from the outer function. 



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

