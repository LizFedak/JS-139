function dogMaker(breed) {
  let legs = 4;
  return function(name) {
    return function() {
      console.log(`${name} is a ${breed} with ${legs} legs`);
    }
  }
}

let gsp = dogMaker("GSP");
let moshi = gsp("Moshi");
moshi();




// let band = "Arms and Sleepers";

// function playMusic() {
//   console.log(band);
// }

// function goToConcert() {
//   let band = "Nils Frahm";
//   playMusic();
// }

// goToConcert();