(function(array) {
  array.forEach(name => console.log(name));
})(["Liz","Moshi","Fernand"]);



// function createUser(profileName) {
//   let friends = [];
//   return { 
//     addFriend(user) {
//       friends.push(user.showName());
//     },
//     updateProfileName(newName) {
//       profileName = newName;
//     },
//     showFriendList() {
//       friends.forEach(name => console.log(name));
//     },
//     showName() { 
//       return profileName;
//     }
//   }
// }

// let mike = createUser("magicMike");
// let nancy = createUser("fancynancy");
// mike.addFriend(nancy);

// // console.log(mike.showName());
// mike.showFriendList();


// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// var Image;
// var catImage;
// var pudding;

// console.log(Image);
// console.log(catImage);
// console.log(pudding);

// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// Image = class {
//   constructor(file) {
//     this.file = file;
//   }
// };

// catImage = new Image("cat.png");
// pudding = new Pet("Pudding", catImage);
// // var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);

// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// console.log(catImage);
// console.log(pudding);

// This problem is kind of confusing/ I don't understand the point of it. 
// https://launchschool.com/lessons/43f23069/assignments/39f50f91
// I thought it was pointing out that class declaration definition is not hoisted 


// function showHoisting() {
//   console.log(a); // undefined
//   if (true) {
//     var a = 1;
//     let b = 2;
//   }
//   console.log(c); // undefined
//   if (false) {
//     var c = 3;
//   }
//   console.log(a); // 1
//   console.log(c); // undefined
//   console.log(b); // ReferenceError: b is not defined
// }

// showHoisting();

// function showHoistingLong() {
//   var a;
//   var c;
//   let b;


//   console.log(b); // ReferenceError
//   console.log(c); // Undefined


//   if (true) {
//     one = 1;
//     b = 2;
//   }
//   if (false) {
//     c = 3;
//   }
//   console.log(a); // 1
//   console.log(c); // undefined
//   console.log(b); // ReferenceError: b is not defined
// }