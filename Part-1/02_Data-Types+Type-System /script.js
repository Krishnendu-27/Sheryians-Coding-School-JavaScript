// there 2 types of data types
// 1. primitive : from copy this veriable we get a copy of real varible
// string , number , booleas , null , undefiend , Symbol , bigint
// 2. refernce : its give refernce not the copy like adress
//array [] , objects{} , fucntion()

let a = 12;
b = 12; // just get a copy
a = a + 12;

let c = [1, 2, 3, 5];
console.log(`before C ${c}`);
let d = c; // its have the same value of c
d.push(10);
console.log(`after C ${c}`);

// '' - single quoestes
// "" - double quoestes
// `` - baktiqes
//String:  whatever wrap in single double and baktiqes are called String

// Numebrs: decimal non decimal are all numbers

// Boolean: true or false

// Null: just empty

// undefined: if give no value in a varibale by default its  get undefined

/* undefined given by JS engine and null given manualy */

// Symbol: unique immutable value.
let f1 = 1;
let f2 = 1;
console.log(f1 === f2); // true
let u1 = Symbol("halo");
let u2 = Symbol("halo");
console.log(u1 === u2); // false

// by doing Number.MAX_SAFE_INTEGER we found the number that integer can hold
console.log(Number.MAX_SAFE_INTEGER);

// bigint: to use it we just neeed to add n after a number

let f = 9007199254740991n;

f = f + 52n;

/* Dynamic Typing */
// we can change data in varible
let io = 50;
io = true;
io = "hatori";

// NaN = Not a Number

/* type corection (== & ===) */

/* type coercion: when one type convert in another type autometacily */
console.log("5" + 1);
console.log(5 + "1");
// both ("5" + 1) and (5 + "1") is same
// if one become string js conver other also string and concat it
// but for - its get diffrenct becuse by - only one thing can done subtraction so he do type coercion on string and make it a number
console.log("5" - 1);
console.log(5 - "1");

/* truthy vs falsy */
//  js break every value in true and false
// false: 0 , false , "" , null , undefined , NaN , document.all
/* other will be true */ 
// how to check: !!the value.
console.log(!!null);
console.log(!!"");
console.log(!!undefined);
console.log(!!NaN);
console.log(!!document.all);
