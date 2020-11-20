const callbackFunction = (val) => val;

function map(array, callbackFunction, context) {
  let results = [];
  for (let index = 0; index < array.length; index++ ) {
    results.push(callbackFunction.call(context, array[index]));
  }
  return results;
}

let obj = {
  names: ["Liz", "Moshi","Fernand"]
}



console.log(map(obj.names, callbackFunction, obj));