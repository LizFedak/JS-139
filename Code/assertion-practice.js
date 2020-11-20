class Wine {
  constructor(type, age) {
    this.type = type; // string
    this.yearsAged = age;
  }
}
module.exports = Car;


// toEqual

test('two new wine objects are not equal objects', () => {
  let wine1 = new Wine("Pinot", 4);
  let wine2 = new Wine("Sauvignon Blanc", 1);
  expect(wine1).not.toEqual(wine2);
});

//toBeUndefined

test('does not have doors', () => {
  let car = new Car();
  expect(car.doors).toBeUndefined();
});

