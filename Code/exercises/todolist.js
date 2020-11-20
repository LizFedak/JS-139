"use strict";
let Todo = require('./todo.js');


class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  add(title) {
    if (!(title instanceof Todo)) {
      throw new TypeError("Can only add Todo objects")
    } 
    this.todos.push(title);
  }
  size() {
    return this.todos.length;
  }
  first() {
    return this.todos[0];
  }
  last() {  
    return this.todos.slice(-1)[0];
  }
  itemAt(index) {
    if (this._validateIndex(index)) {
      return this.todos[index];
    }
  }
  _validateIndex(index) {
    if (typeof index === "number" && index < this.size() && arguments[0] !== undefined) {
      return true
    } else {
      throw new ReferenceError(`Invalid index: ${index}`);
    }
  }
  markDoneAt(index) {
    if (this._validateIndex(index)) {
      this.todos[index].markDone();
    }
  }
  markUndoneAt(index) {
    if (this._validateIndex(index)) {
      this.todos[index].markUndone();
    }
  }
  isDone() {
    return this.todos.every((item) => item.isDone());
  }
  shift() {
    return this.todos.shift() || undefined;
  }
  pop() {
    return this.todos.pop() || undefined;
  }
  removeAt(index) {
    if (this._validateIndex(index)) {
      return this.todos.splice(index, 1);
    }
  }
  // change this to be a string that is returned
  toString() {
    console.log("---- Today's Todos ----");
    this.todos.forEach(item => {
      console.log(item.toString());
    });
  }
  forEach(callback) {
    for (let index = 0; index < this.size(); index++ ) {
      callback(this.todos[index]);
    }
  }
  filter(callback) {
    let newList = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) {
        newList.add(todo);
      }
    });
    return newList;
  }

  findByTitle(title) {
    return this.filter(item => item.title === title).first();
  }
  allDone() {
    return this.filter(item => item.isDone());
  }
  allNotDone() {
    return this.filter(item => !item.isDone());
  }
  markDone(title) {
    this.findByTitle(title).markDone();
  }
  markAllDone() {
    this.forEach(item => item.markDone());
  }
  markAllUndone() {
    this.forEach(item => item.markUndone());
  }
  toArray() {
    return [].concat(this.todos);
  }
}

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1)
list.add(todo2)
list.add(todo3)
list.add(todo4)
list.add(todo5)
list.add(todo6)
todo1.markDone();
todo5.markDone();

// console.log(list.allNotDone()); 
console.log(list.toArray());
