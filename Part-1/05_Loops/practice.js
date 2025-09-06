/* Student grade logic:
 Write a program that prints A, B, C, D, or F based on marks
*/
let marks = 75;
if (marks > 100) {
  console.log("A");
} else if (marks > 75) {
  console.log("B");
} else if (marks > 50) {
  console.log("C");
} else if (marks > 25) {
  console.log("D");
} else if (marks > 15) {
  console.log("F");
}
/*
Rock-paper-scissors:
Given player1 and player2's choice, print winner or draw
*/
let player1 = "rock";
let player2 = "paper";
if ((player1 = "rock" && player2 == "paper")) {
  console.log("player 2 winner");
} else if ((player1 = "paper" && player2 == "rock")) {
  console.log("player 1 winner");
} else if ((player1 = "paper" && player2 == "sizer")) {
  console.log("player 2 winner");
} else if ((player1 = "sizer" && player2 == "paper")) {
  console.log("player 1 winner");
} else if ((player1 = "sizer" && player2 == "rock")) {
  console.log("player 2 winner");
} else if ((player1 = "rock" && player2 == "sizer")) {
  console.log("player 1 winner");
} else {
  console.log("enter corrcet name");
}
/* 
Login message:
// Show different messages based on combination
*/
let isLoggedIn = true;
let isAdmin = false;
if (isLoggedIn && isAdmin) {
  console.log("welcome to admin panel");
} else if (isLoggedIn && isAdmin == false) {
  console.log("welcome to your profile");
} else if (isLoggedIn == 0 && isAdmin == 0) {
  console.log("please login");
}
/*
Weather advice:
*/
let weather = "rainy";
switch (weather) {
  case "rainy":
    console.log("its a rainy day");
    break;
  case "sunny":
    console.log("its a sunny day");
    break;
  case "cold":
    console.log("its a winter day");
    break;
  default:
    console.log("enter corect weather");
    break;
}
