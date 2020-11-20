https://launchschool.com/lessons/896d0d67/assignments/4188ba52

The forEach implementation is an example of encapsulation. We are hiding the implementation details from the user and they're just going to call forEach on the main object instead of having to call forEach on list.todos. 


Our version:
list.forEach(todo => {
  // Do something with each todo
});

Standard version:
list.todos.forEach(todo => {
  // Do something
});