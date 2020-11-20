class FrenchWine {
  constructor(type, age) {
    this.type = type; // string
    this.yearsAged = age;
    this.isCorked = null;
    this.region = "France";
    this.isOpen = false;
  }
  openBottle(note) {
    this.isOpen = true;
    this.tastingNotes = note;
  }
}
module.exports = FrenchWine;