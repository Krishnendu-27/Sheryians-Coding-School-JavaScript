/* 
 Practice Zone
. Predict:
. Convert using unary +
typeof {} // "object"
typeof function(){} // "function"

console.log("10" + 1);
console.log("10" - 1);
console.log(true + false);
console.log(!!"Sheryians");
js
28/06/2025, 15:10 Complete JS Course Syllabus
14/36
. Use ternary:
. Build a calculator:
. Score logic:
let str = "42";
let num = +str;
console.log(num); // 42
js
let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
js
// Using switch + arithmetic operators
function calc(a, b, operator) {
 // +, -, *, /
}
js
let marks = 82;
// Print "Excellent", "Good", "Average", or "Fail" based on ranges
*/
console.log("10" + 1); // 101
console.log("10" - 1); // 9
console.log(true + false); // 1
console.log(!!"Sheryians"); // NaN

let str = "42";
let num = +str;
console.log(num); // 42 in number

let age = 17;
let msg = age >= 18 ? "Adult" : "Minor"; // minor

// Using switch + arithmetic operators
function calc(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    default:
      console.log("Enter again");
      break;
  }
}
calc(5, 6, "+");
