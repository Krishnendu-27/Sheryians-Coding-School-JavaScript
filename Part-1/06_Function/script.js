// function give us power to use a block of code when wver we need  its help in maintain reledibility and easy to correct
/* Named Function Declaration */
function name() {
  console.log("krish");
}
name();
/* Anonymous Function Expression */
let title = function () {
  console.log("ghosh");
};
title();
/* fat arrow function */
let city = () => {
  console.log("kolkata");
};

/*  function parametar : help us to give value in function and get the output acording it  */
let add = function (a, b) {
  console.log(a + b);
};
add(5, 5); // arguments
add(6, 5);
add(5, 9);

// when add two undefined its became NaN
// in js there a defualt parameter concept have they just act as a base case
function sub(a = 0, b = 0) {
  console.log(a - b);
}
sub(); // it give 0 becuse its take default parametarter 0
sub(5 - 3);

// when argument have many then we need to creat that many parameter for that we use rest and spread by  ...
//  if ... use in function parameter then it called rest    //
function abdc(...val) {
  console.log(val);
}
abdc(1, 2, 3, 4, 5, 6);
//  if ... use in array and obeject then it called spread    //

