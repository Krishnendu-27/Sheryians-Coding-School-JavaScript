// array in Javascript is dynamic
let marks = [11, 22, 33, 44, 55];
// numbering start from 0
// if we want to acess some marks that not avalavel give undefined
console.log(marks);

let arr = new Array(1, 2, 3, 4, 5);

console.log(arr);

// both way we can creat Array
//Q:  give me 4 index value
console.log(arr[4]);

/* modeify the array */

marks[2] = 33;

console.log(marks);

/* methooed */
//  when we write arrayname then " . " those all are metohed

marks.push(45); // we add a value in array in the last

console.log(`Before pop ${marks}`);
marks.pop(); // it will delete the last  value

console.log(`after pop ${marks}`);

console.log(`before shift ${marks}`);
marks.shift(); // it will delete the first  value
console.log(`after shift ${marks}`);

console.log(`before unshift ${marks}`);
marks.unshift(20); // it will add the first  value
console.log(`after unshift ${marks}`);

console.log(`before splice ${marks}`);
marks.splice(2, 1); // it will delete a value mens first argument for from where it start next argument is till how much
console.log(`After splice ${marks}`);

// slice it give a new array dont change in the actual array
//  slice need to things 1st argument is where to start and secoend where to end
console.log(`before slice ${marks}`);

let marks1 = marks.slice(1, 4);
console.log(`After slice ${marks1}`);

arr.reverse(); /// it just reverse the array it wont give new array it do it in the actual array
console.log(arr);

// sort it always took function
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sr1 = [...arr2].sort(function (a, b) {
  return a - b; // asending order
});
let sr2 = [...arr2].sort(function (a, b) {
  return b - a; // desending order
});
console.log(sr1);
console.log(sr2);

// for each : so the inner code will check every time for each element of array. it took function

let arr3 = [4, 5, 8, 6, 9, 2, 4, 8, 8, 2, 5];

arr3.forEach(function (val) {
  console.log(val * 5);
});

// map: when we use array when we want to creat new array basis of previous array data

// seeing map creat a black array in the mind and whatever it return it add on the new array

let newarr = [...arr3].map((val) => {
  if (val > 5) return val;
});
console.log(newarr);

// filter: if we write true then the value will go in the newarray if write false then it wont go
let newarr2 = arr3.filter((val) => {
  if (val < 15) return true;
});
console.log(newarr2);
// reduce: it give one value return
let sumofarr3 = arr3.reduce(function (accumulater, val) {
  return accumulater + val;
}, 0);
console.log(sumofarr3);

// find: whatever satify its conditons first it return that it dont go more.

let allel = arr2.find(function (val) {
  if (val > 1) {
    return val;
  }
});
console.log(allel);

/* de-structering  */
let arr5 = [1, 2, 3, 4];

let [a, b, c] = arr5;
console.log(c);

// to copy the array value in new array we need spread operator

let arr6 = [...arr5];
console.log(arr6);
