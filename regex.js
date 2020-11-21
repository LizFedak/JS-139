// const regexp = RegExp('foo[a-z]*','g');
// const str = 'table football, foosball';
// const matches = str.matchAll(regexp);

// for (const match of matches) {
//   console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
// }

let string = "1dozen eggs 1loaf bread 5yogurt cups 2 packs of cheese 1 pound of coffee";
const re = /[0-9]+[a-z ]+/g;
const matches = string.matchAll(re);
let groceryList = {}
for (const thing of matches) {
  let count = Number(thing[0].match(/[0-9]+/)[0]);
  let item = thing[0].match(/[a-z ]+/)[0];
  groceryList[item.trim()] = count;
}

console.log(groceryList);


// I did not read the full test accurately and wrote a regex to test the description instead of the actual input but thought it was useful to keep for review... 
// function extractInfo(dateString) {
//   let getDay = /(((first|second|third|fourth|fifth|last) )*(mon|tues|wednes|thurs|fri|satur|sun)(day|teenth))/;
//   let getMonth = /(january|february|march|april|may|june|july|august|september|october|december)/;
//   let getYear = /2[0-9]{3}/;

//   let day = dateString.match(getDay)[0].split(" ");
//   let when = day[1] || "";
//   let month = dateString.match(getMonth)[0];
//   let year = dateString.match(getYear)[0];

//   return {year, month, day, when}
// }


// let phoneNumbers = [
//   '123-1234',
//   '123.1234',
//   '1 - (123) 123-1234',
//   '123 1234'
// ]

// let re = /[- )(.]+/g;

// let result = phoneNumbers.map(number => {
//   return number.split(re).join("-");
// });

// console.log(result); // [ '123-1234', '123-1234', '1-123-123-1234', '123-1234' ]








// function validateResponse(string) {
//   let re = /(yes)|(no)/g;
//   if (string.search(re) > -1) {
//     return "Success";
//   }
//   throw new Error("Invalid response");
// }

// let responses = [
//   'Oh, yes!', // Success
//   'nooooooo', // Success
//   'Why?' // Error: Invalid response
// ]
// responses.forEach(response => console.log(validateResponse(response)));

// replace with a callback function




// let pins = [
//   '123123',
//   '1234',
//   'abcd',
//   '12356'
// ]

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }

// pins.forEach(string => {
//   let isValid = validatePIN(string);
//   console.log(`${string}: ${isValid ? 'is valid' : 'is not valid'}`);
// });


// let images = [
//   'IMG-BIRTHDAY-PARTY-001.jpeg',
//   'IMG-BIRTHDAY-PARTY-002.jpeg',
//   'IMG-BIRTHDAY-PARTY-003.jpeg',
//   'IMG-HALLOWEEN-001.jpeg',
//   'IMG-HALLOWEEN-002.jpeg',
//   'IMG-HALLOWEEN-003.jpeg',
// ]

// let replacer = (str) => str.toLowerCase();
// let re = /(?<=IMG-)[A-Z-]+(?=\-)/g;
// let newList = images.map(string => {
//   return string.replace(re, replacer);
// })

// console.log(newList);

// Say that you want to find all of the letters in a string and count them and place them in an object.

// let re = /(?<!\.\s)[A-Z]/;
// let abc = 'abcdefghijklmnopwrstuvwxyz'.toUpperCase();
// let counts = {};

// let string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// for (let letter = 0; letter < abc.length; letter++ ) {
//   let regex = new RegExp('(?<!\\.\\s)' + abc[letter], 'g');
//   let length = [...string.matchAll(regex)] || [];
//   counts[abc[letter]] = length.length;
// }

// console.log(counts);


// String.prototype.trim = function() {
//   let cleanUpWhiteSpace = /\s+/g;
//   let result = this.replace(cleanUpWhiteSpace, " ");

//   let leadingSpace = /^\s/;
//   let trailingSpace = /\s$/;

//   result = result.replace(leadingSpace, "");
//   result = result.replace(trailingSpace, "");
//   return result;
// }
// console.log("    This is a      string with    white     spaces.   ".trim());