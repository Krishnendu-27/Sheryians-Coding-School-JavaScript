/*
Practice Zone
. Predict the output:
. Check types:
. Truthy or Falsy?
console.log(null + 1);
console.log("5" + 3);
console.log("5" - 3);
console.log(true + false);
console.log(typeof []);
console.log(typeof null);
console.log(typeof 123n);

. Write a function isEmpty(value) that checks if a given value is null , undefined , or "" .
. Compare with loose vs strict:
console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined));// falsy
js
console.log(5 == "5"); // true
console.log(5 === "5"); // false
*/
console.log(null + 1); // 1
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log(true + false); // 1
console.log(typeof []); // undefined
console.log(typeof null); // object
console.log(typeof 123n); // bigint
console.log(5 == "5"); // true
console.log(5 === "5"); // false