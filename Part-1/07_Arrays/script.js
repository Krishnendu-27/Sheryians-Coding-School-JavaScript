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

let marks1 = marks.slice(1,4);
console.log(`After slice ${marks1}`);
