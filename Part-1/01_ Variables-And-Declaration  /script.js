// word :  are normal word like halo bro
// keyword: in js whatever can do something are all keyword of javaScript  for , else

// let varibale can change but consta value dont change.
// var part od ES5 and let const part of ES6
// variable need to reuse the line and store the data

/* declaration and initialijataion */

var a; // declaration
a = 12; // initialijataion

// var added in window & its a function scoped. it can declare and not give any error.
var b = 10;
var b = 20;
let name = "krish"; // declaration and initialijataion

// let not give chance to declare it but we can update it

const title = "rio"; // it need to declaration and initialijataion same line other way it get error.

// we can not update it

/* scope (global, block , functional)  */

// global scope
let c = 50;
// functional scope only use in the function
function istrue(param) {
  param = 50;
  if ((param = true)) {
    return param;
  }
}
// var is a functional scope so its dont care scope. var created fucntion by the javascript in the compile time.

/* Temporal dead Zone */
//  the area  wheere js know vaarible exit in the code but he cannot acess in his situation

let d = 50;
console.log(d);
// it work in let and const but not in var
// it give error "Cannot access 'd' before initialization"

console.log(e);
var e = 80;
// it not give error but give result undefined reason hoisting

/* Hoisting impact per type */
// When a variable is created in JavaScript, it breaks into two parts: its declaration part moves to the top (is "hoisted"), and its initialization part remains below.

// var f = 65; it break in 2 part
var f = undefined; // it goes line number 1
f = 65;

let g = 20; // block scope // global

{
  let g = 10;
  // it life span only to the braces
  console.log(`inside the block: ${g}`);
}

console.log(`outside the block: ${g}`);

const person = { name: "krish" };
console.log(person);
console.log(`before change the varible is: ${person.name}`);
person.name = "light yagami";
console.log(`after change the varible is: ${person.name}`);

// Want to Make the Object Truly Unchangeable?
// If you really want the object itself to be completely immutable, you can use:

Object.freeze(person);
// in const Reassign variable  Not allowed