let FrenchWine = require('./wine.js');




describe("Test new empty objects", () => {
  let wine;
  beforeEach(() => {
    wine = new FrenchWine();
  });
  test('two new wine objects without args are  equal objects', () => {
    let wine2 = new FrenchWine();
    expect(wine).toEqual(wine2);
  });

  test('obj without properties set has undefined properties', () => {
    expect(wine.yearsAged).toBeUndefined();
  });
  test('raises an error when called pourWine on it', () => {
    let wine = new FrenchWine();
    // Wrap the wine.pourWine() invocation in a function so it doesn't throw an exception itself before toThrow can detect it!
    expect(() => wine.pourWine()).toThrow();
  });
})

describe("New wine objects work as expected", () => {
  let wine;
  beforeEach(() => {
    wine = new FrenchWine("Grenache", 6)
  });
  test('two new wine objects with args are not equal objects', () => {
    let wine2 = new FrenchWine("Malbec", 3);
    expect(wine).not.toEqual(wine2);
  });

  test('a new bottle of wine has no info yet about if it is corked', () => {
    expect(wine.isCorked).toBeNull();
  });
  test('Region is truthy', () => {
    expect(wine.region).toBeTruthy();
  });
  
  test('wine list contains the new wine', () => {
    let wineList = [];
    wineList.push(wine);
    expect(wineList).toContain(wine);
  });
});
