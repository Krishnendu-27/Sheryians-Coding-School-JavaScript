// . Print 1 to 10 using for
for (let i = 1; i < 10; i++) {
  console.log(i);
}
// . Print even numbers between 1 to 20
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// . Reverse a string using loop
let a = "haras";
let b;
for (let i = a.length; i >= 0; i--) {
  console.log(a[i]);
}

// . Sum of all numbers in an array
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

// . Prina[i - 2];t all characters of a name using for-of
// . Print all object keys and values using for-in
// . Use continue to skip a specific number
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("its 5");
    continue;
  }
  if (i == 9) break;
  console.log(i);
}
// . Guess number game – use while to ask until correct
let num = 50;
let i;
while (i == num) {
  i = prompt("enter a number");
}
if (i == num) console.log("you win the game");

// . Pattern: Print triangle using *
for (let i = 0; i < 5; i++) {
  for (let index = 0; index < i; index++) {
    process.stdout.write("*");
  }
  console.log(" ");
}

// . Sum of even numbers in an array using forEach
