const filterItems = (num) => num * 2;
let array = [1,1,2,5,7];

function reduce(array, callback, startArg) {
  let index = 0;
  let accumulator;
  if (startArg === undefined) {
    accumulator = array[0];
    index += 1;
  } else {
    accumulator = startArg;
  }

  for (index; index < array.length; index++) {
    accumulator = callback(accumulator, array[index]);
  }
  return accumulator;
}


function map(array, callback) {
  return array.reduce((callbackedItems, value) => {
    callbackedItems.push(callback(value));
    return callbackedItems;
  }, []);
}

function filter(array, callback) {
  return array.reduce((filteredItems, value) => {
    if (callback(value)) {
      filteredItems.push(value);
    }
    return filteredItems;
  }, []);
}


console.log(map(array, filterItems));