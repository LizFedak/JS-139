let FrenchWine = require('./wine.js');

describe("New wine objects work as expected", () => {
  test('two new wine objects with args are not equal objects', () => {
    let wine1 = new FrenchWine("Grenache", 6);
    let wine2 = new FrenchWine("Malbec", 3);
    expect(wine1).not.toEqual(wine2);
  });
  test('two new wine objects without args are  equal objects', () => {
    let wine1 = new FrenchWine();
    let wine2 = new FrenchWine();
    expect(wine1).toEqual(wine2);
  });

  test('obj without properties set has undefined properties', () => {
    let wine1 = new FrenchWine();
    expect(wine1.yearsAged).toBeUndefined();
  });
  test('raises an error when called pourWine on it', () => {
    let wine = new FrenchWine();
    // Wrap the wine.pourWine() invocation in a function so it doesn't throw an exception itself before toThrow can detect it!
    expect(() => wine.pourWine()).toThrow();
  });
  test('a new bottle of wine has no info yet about if it is corked', () => {
    let wine = new FrenchWine("Grenache", 7);
    expect(wine.isCorked).toBeNull();
  });
  test('Region is truthy', () => {
    let wine = new FrenchWine("Gamay",1);
    expect(wine.region).toBeTruthy();
  });


  test('wine list contains the new wine', () => {
    let wine = new FrenchWine("Barbera",4);
    let wineList = [];
    wineList.push(wine);
    expect(wineList).toContain(wine);
  });
});


// https://jestjs.io/docs/en/expect#expecthasassertions

