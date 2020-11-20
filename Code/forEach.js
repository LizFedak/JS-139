const callbackFunction = (value, index, nextVal) => console.log("value: ", value, index, nextVal);
let arr = [1,2,3];

function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index++ ) {
    callback.call(thisArg, array[index], index, array[index+1]);
  }
}


forEach(arr, callbackFunction);