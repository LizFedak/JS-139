// function makeCounterLogger(integer) {
//   let base = integer;
//   return function(secondNumber) {
//     if (base > secondNumber) {
//       for (let start = base; start >= secondNumber; start--) {
//         console.log(start);
//       }
//     } else {
//       for (let start = base; start <= secondNumber; start++) {
//         console.log(start);
//       }
//     }
//   }
// }


// let countlog = makeCounterLogger(5);
// countlog(8);


// countlog(2);

function makeList() {
  let list = [];
  return function(string) {
    if (string === undefined) {
      console.log(list);
    } else if (list.includes(string)) {
      list.splice(list.indexOf(string), 1);
    } else {
      list.push(string);
    }
  }
}

// let list = makeList();
// list("read book");
// list("make breakfast");
// list();
// list("make breakfast");
// list();

function makeList2() {
  let list = [];
  return {
    add(newItem) {
      list.push(newItem)
      console.log(`${newItem} added!`);
    },
    list() {
      list.forEach(item => console.log(item));
    },
    remove(newItem) {
      list.splice(list.indexOf(newItem), 1);
      console.log(`${newItem} removed!`);
    }
  }
}

let list = makeList2();
list.add("peas");
list.list();
list.add("corn");
list.list();


list.remove("peas");
list.list();