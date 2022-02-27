console.log(2);
console.warn("this is warning");
console.error("this is error massage");

let score;
score = 10;
score = 20;
console.log(score);
let s = "sourav majumder";
console.log(s.substring(3).toUpperCase());
let str = "sourav, majumder, rabbi, rabia, rahul";
console.log(str.split(","));
const array = new Array("ssoura", "sia", "siuu");
console.log(array);
console.log(array.indexOf("sia"));
const person = {
  firstName: "Sourav",
  lastName: "Majumder",
  hobbies: {
    city: "dhaka",
    district: "Savar",
    number: 1235,
  },
};
person.email = "majumdersourav202@gmail.com";
console.log(person.hobbies.city);
console.log(person);

const json = JSON.stringify(person);
console.log(json);

const todos = [
  {
    id: 1,
    text: "Meeting with sourav",
    isComplete: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isComplete: true,
  },
  {
    id: 3,
    text: "Study",
    isComplete: false,
  },
];
// Map
const todosText = todos.map(function (todo) {
  return todo.text;
});
console.log(todosText);

// Filter
const todosCompleted = todos.filter(function (todo) {
  return todo.isComplete === true;
});
console.log(todosCompleted);

//Map + Filter
const todosFull = todos
  .filter(function (todo) {
    return todo.isComplete === true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todosFull);
function addNumbers(num1, num2) {
  console.log(num1 + num2);
}
addNumbers(3, 4);

// Array funtion
const addNo = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNo(3, 4));

// Function
function newPerson(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  // Get full year will work as a function
  this.getfullYear = function () {
    return this.dob.getFullYear();
  };
  this.getfullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
const newPerson1 = new newPerson("sourav", "majumder", "02-07-2000");
console.log(newPerson1.dob);
console.log(newPerson1.getfullYear());
console.log(newPerson1.getfullName());

// Class

class myPerson {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getfullYear = function () {
    return this.dob.getFullYear();
  };
  getfullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
const myPerson1 = new myPerson("sourav", "majumder", "02-07-2000");
console.log(myPerson1.dob);
console.log(myPerson1.getfullYear());
console.log(myPerson1.getfullName());
console.log(myPerson1);
