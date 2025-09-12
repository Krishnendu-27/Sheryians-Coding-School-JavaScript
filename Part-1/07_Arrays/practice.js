// . Create an array of student names and print each
let student = ["krish", "arya", "rio"];
console.log(student);
// . Filter even numbers from an array
let num = [5, 4, 6, 4, 5, 54, 7, 5, 5, 8, 4, 5];
let evennum = num.filter(function (val) {
  if (val % 2 == 0) return num;
});
console.log(evennum);
// . Map prices to include GST (18%)
let price = [10, 20, 30, 40, 50];
let priceWithTax = price.map(function (val) {
  return (val = val + val * (18 / 100));
});
console.log(priceWithTax);

// . Reduce salaries to calculate total payroll
/* formulla: Net Pay = Gross Pay - Total Deductions */
let grossPay = [50000, 902000, 525454, 821654, 5644634, 69354, 949447, 63499];
let netpay = grossPay.map(function (val) {
  return (val = val - val * (40 / 100));
});
console.table(netpay);
// . Find the first student with grade A
let marks = ["A", "B", "F"];
let findTopper = marks.find(function (val) {
  if (val == "A") return "we have topper student";
});
console.log(findTopper);

// . Write a function to reverse an array
let arr = ["krish", "arya", "rio"];
console.log(arr.reverse());

// . Sort array of ages in ascending order
let age = [20, 30, 40, 50, 90, 45, 65, 85, 25];
let asage = [...age].sort(function (a, b) {
  return a - b;
});
console.log(asage);
// . Destructure first two elements of an array
let [a, b] = age;
console.log([a, b]);

// . Use some() to check if any student failed
let fail = marks.some(function (val) {
  if (val > 50) return;
});
console.log(fail);

// . Use spread to copy and add new item

let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = [...arr2];
arr3.pop();
console.log(arr2);
console.log(arr3);

