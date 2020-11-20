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

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));