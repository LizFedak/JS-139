`array.splice(start, countToDelete, valsToAdd, valsToAdd, etc)`

Example:

```js
removeAt(index) {
    if (this._validateIndex(index)) {
      return this.todos.splice(index, 1);
    }
  }
```

This one uses splice to delete an item in place at that index

