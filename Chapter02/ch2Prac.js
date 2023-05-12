"use strict";
const ps = require("prompt-sync");
const prompt = ps();


//   Question #01:   Use Logical Operator to  find wheteher age of a person lies between 10 and 20

console.log("\nQuestion # 01");
let age = prompt("What  is your age: ");
age = Number.parseInt(age);
if (age >= 10 && age <= 20) {
    console.log("Your age lies between 10 and 20");
}

else {
    console.log("Your age does not lie between 10 and 20");
}



//  Question # 02:  Switch Statement
console.log("\nQuestion # 02");

console.log("your age is", age);
switch (age) {
    case (age <= '10'):
        console.log("Your age is not greater than 10");
        break;

    default:
        console.log("Your age is greater than 10");

}


//  Question # 03 :  Weather a number is divisible by 2 or 3

console.log("\nQuestion # 03");

let num = prompt("Enter number: ");
num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
    console.log("Your number is divisible by 2 and 3");
}

else {
    console.log("Your number is not divisible by 2 and 3");
}


//  Question # 04 :  Weather a number is divisible by either 2 or 3

console.log("\nQuestion # 04");

if (num % 2 == 0) {
    console.log("Your number is divisible by 2");
}

else if (num % 3 == 0) {
    console.log("Your number is divisible by 3");
}

else {
    console.log("Your number is not divisible by 2 and 3");
}



//  Question # 05 :  use ternary operatorr to check wheather the age is suitable for driving

console.log("\nQuestion # 05");

age > 18 ? console.log("you can drive") : console.log("you cannot drive");