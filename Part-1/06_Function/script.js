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

// return mens from where to came you will back there

/* The first class function */
// fuction that trat as value , varibale we can treat them like normal value

let j = 12; // 12 is value

j = function my(val) {
  val();
};
//  we can use it like a function actual value

abdc(function () {
  // we can do this also we cant name this
  console.log("halo bro");
});

/* high-order function */
// which return fucntion or acept a fucntion in parametar
function home() {
  return function () {
    console.log("home in home");
  };
}
// to call this we need 2 ()();
home()();

/* Pure fucntion and inpure function */
// pure: which do't change the outside values
function pure() {
  console.log("naruto");
}
// impure: which change the outside values
function impure() {
  return a++;
}

/* Clouser */
// one fuction which return another function OR which fucntion return always use parent fucntion variable

/* Lexcial scoping */
//  we can only acess the variable created in that scope or its child scope . never a parent scope varible acess child scope varible that are created after that
function efg() {
  let a = 12; // a acess have in efg, hij , klm.
  function hij() {
    let b = 50; // b acess have till hij , klm.
    function klm() {
      let c = 60; // c acess have only in klm.
    }
  }
}

/* IIFE(Immediately invoked Function Expresions) */
// "when creat then call"
(function () {
  console.log("tere vhai IIFE he");
})();

/* Hoesting  */
// we can acess fucntion before create but we can not use it fucntion expresion

kia();
funs(); // not work
function kia() {
  console.log("kia is a good girl");
}
let funs = function () {
  console.log("kia is a good girl");
};
// where we use object and their key is function there we can not use fat arror fucntion we need to use normal fucntion.

// diffrence bettwen high order function and closer
// function: its return the function under a fucntion
// closer: also return a fucntion but use a some vriable of parent variable
