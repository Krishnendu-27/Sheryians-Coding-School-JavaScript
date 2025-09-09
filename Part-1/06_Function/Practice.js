// using rest parameter get total number of score

function score(...score1) {
  let total = 0;
  score1.forEach(function (val) {
    total += val;
  });
  console.log(total);
}

score(1, 2, 3, 4, 5, 6, 7, 8);

function xyz(val) {
  val();
}
xyz(function () {
  console.log("bye bro");
});

//  Write a BMI calculator

function bmi(weight, height) {
  return (weight / height) ^ 2;
}
console.log(bmi(50, 5.3));

// Build a counter using closure

function counter() {
  let count = 0;
  return function () {
    count++;
    // console.log(count);
    return count;
  };
}
let c = counter();
console.log(c());
console.log(c());

// Create a pure function to transform a value
function transform(val) {
  return val * 2;
}
console.log(transform(15));

// Use IIFE to isolate variables
(function name() {
  console.log("my name is naruto");
})();

// Create a greet function with default name
function greet(name) {
  return `welcome ${name}`;
}
console.log(greet("krish"));

// Write a function that returns another function
function name() {
  console.log("krish");
  return function () {
    return console.log("in west bengal");
  };
}
console.log(name()());


// Create a reusable discount calculator (HOF)
function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let discountAmmount = discountCalculator(20)(200);
console.log(discountAmmount);

