> This concept is elaborated in the closuresScopePrivatedata.md file
---

# Description of Private Data

It's possible to define data in an object that is not accessible from outside of the object, i.e. **private data**. However, the concept of private data in JavaScript is not built-in to JavaScript. 

The reason it is able to work in JavaScript is thanks to the lexical scoping of closures and use of IIFEs (Immediately Invoked Function Expressions).

That said, generally all of the implementation details will still be public, so it's mainly used to prevent developers from manipulating data directly and encourages them to use your interface


From LS material:

When a class has methods that provide the behaviors and actions you need, you should use those methods instead of accessing the properties directly. 


The entire goal of creating a class and encapsulating logic in it is to hide implementation details and contain ripple effects when things change. Keep in mind that JavaScript doesn't implement encapsulation in a way that directly supports private data and methods. Use the provided interface -- the methods -- instead whenever possible.