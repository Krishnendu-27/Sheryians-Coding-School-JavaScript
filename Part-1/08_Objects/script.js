// when we need a detail for a one thing then we use object
let obj = {
  name: "krish",
  age: 25,
};
// we can hold anything in the object
// by using . operator we acesss object or  by [] this
console.log(obj.age);
console.log(obj["name"]);

// why we need this []
let a = "age";

console.log(obj.a); // it wrong it give undefined
console.log(obj[a]); // now it find a value wich is age in the obj then the answer will be 25

/* nesting  & deep structering*/

let user = {
  name: "krish",
  adress: {
    vil: "rajhat",
    pin: {
      lan: 75.85,
      lng: 8.85,
    },
  },
};

console.log(user.adress.pin.lan); // by this we acess nested object

/* destructering */
// here just need to give the path where it can go to find the lan , lng mens under the pin lan,lng have thats why we write user.adress.pin.
// here variable need to same as as the object we want to assign if not then it wont assign.
let { lan, lng } = user.adress.pin;

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
// or
let obj3 = Object.assign(
  {
    /* we can add new key and value here */
  },
  obj
);

// for copy nested object we need deep clone
// we did it by PARSE. let new_var = JSON.stringify(JSON.stringify(/* varible name */))

let obj4 = JSON.parse(JSON.stringify(user));
// by stringify it becomae string then by parse it becomes real copy
obj4.adress.pin.lan = 5555;
console.log(user.adress.pin.lan);
console.log(obj4.adress.pin.lan);

/* optional property */

// like we can add new value
let role = "admin";
let user5 = {
  name: "krish",
  adress: {
    vil: "rajhat",
    pin: {
      lan: 75.85,
      lng: 8.85,
    },
  },
  [role]: "krish",
};
console.log(user5);
