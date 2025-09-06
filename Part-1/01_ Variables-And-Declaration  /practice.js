/* 
Practice Zone
--------------------------------------------
. Declare your name and city using const , and your age using let .
. Try this and observe the result:
    let x = 5;
    let x = 10;
. Guess the output:
    console.log(count);
    var count = 42;
. Create a const object and add a new key to it — does it work?
. Try accessing a let variable before declaring it — what error do you see?
. Change a const array by pushing a value. Will it throw an error?
*/
// -----------------------------------------
// . Declare your name and city using const , and your age using let .
const city = "kolkata";
const name = "krish";
console.log(city);
console.log(name);
// . Try this and observe the result:
let x = 5;
// let x = 10;
// we cannot do this because Identifier 'x' has already been declared
// . Guess the output: undefined
console.log(count);
var count = 42; // undefined
// Create a const object and add a new key to it — does it work?

const details = { name: "rohit" };

details.title = "snapui";

console.log(details.name);
console.log(details.title);

// Try accessing a let variable before declaring it — what error do you see?

// console.log(r);
let r = 50; // Cannot access 'r' before initialization

// Change a const array by pushing a value. Will it throw an error?

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr); // no error given
