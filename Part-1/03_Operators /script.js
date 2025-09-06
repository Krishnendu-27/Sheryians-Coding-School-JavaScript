/*
+ - * / ** %
= == ===
<= >= ! != !== !! < >
&& ||
?:
*/
// athemetic operator : + - * / ** %
console.log(1 + 2);
console.log(1 - 2);
console.log(1 / 2);
console.log(1 * 2);
console.log(1 % 2);
console.log(1 ** 2);
console.log(1 % 2);

// comparison operator: = == ===  ! != !== !!
// ==  check just the value
// === check the value and type
// when == get result != will be oposite
console.log(12 == 13); // false
console.log(12 != 13); // true

console.log(12 > 12); // false becuse it see 0-11 not 12
console.log(12 >= 12); // true 0-12 thats why

/* Assingment operator */
let a = 12;
a += 5; // a = a+5;  -> 17
a -= 10; // a = a-10 -> 7
a *= 5; // a = a*5   -> 35
a /= 5; // a = a/5   -> 7
a %= 4; // a = a%4   -> 3

/* logical */
// && (AND) ||(OR) ! (NOT)

// why !!12 becuse not + not give real nature
let b = 12;
b = !12; // bacme false
b = !!12; // again became true
// when we covert string it give NaN
let nas = !!"krish";

/* unary operator */
// + - typeof ++ --
// if we add + in front of number string it conver in number
let c = "55";
console.log(typeof c);
let d = +"66";
console.log(typeof d);

// ++ and -- incress and dcress by 1
d++; // post increement
--d; // pre decremnet
let e = 5;
e++;
// 5  + 6 = 11 // normal compiler give 6 but its atucaly give  11

/* ternary operator */
// ?:
// condition ? if true code : else code
let ans = 50 > 40 ? "age 50" : "age 40";
console.log(ans);

// instanceof see that this varibale belong which datatype . its work on refrence value not in premetive
// typeof for premative
// instanceof for reference
let g = [];
console.log(g instanceof Object); // false
console.log(g instanceof Array); // true
