// Chapter 02
//Operations and Expressions + Conditional Expression

console.log("Operators in Js");
let a=45;
let b=4;

//Arithmetic Operators
console.log("a + b = ",a+b);    //Addition Operator
console.log("a - b = ",a-b);    //Subtraction Operrator
console.log("a / b = ",a/b);    //Division Operator
console.log("a * b = ",a*b);    //Multiplication Operatoe
console.log("a ** b = ",a**b);  //Exponential operator (45^4)
console.log("a % b = ",a%b);    //Modulus (Remainder)
console.log("a++ = ",a++);      //Increment
console.log("a-- = ",a--);      //Decrement



//Assigment Operators

// "="
a=8
console.log(a);

// "+="
a+=5; //a=a+5
console.log(a);

// "-="
a-=5; 
console.log(a);

// "*="
a*=5; 
console.log(a);

// "/="
a/=5; 
console.log(a);

// "%="
a%=5; 
console.log(a);

// "**="
a**=5; 
console.log(a);



// Comparison Operators

let comp1=6;
let comp2=7;

// "=="     Equalto
console.log("comp1 == comp2 is ", comp1==comp2);

// "!="     Not equal to     
console.log("comp1 != comp2 is ", comp1!=comp2);

// "==="    Equal value and type
console.log("comp1 === comp2 is ", comp1===comp2);

// "!=="    Not equal value or not equal type
console.log("comp1 !== comp2 is ", comp1!==comp2);

// ">"      Greater than
console.log("comp1 > comp2 is ", comp1>comp2);

// "<"      less than
console.log("comp1 < comp2 is ", comp1<comp2);

// ">="     Greater than or equal to
console.log("comp1 >= comp2 is ", comp1>=comp2);

// "<="     Less than or equal to
console.log("comp1 <= comp2 is ", comp1<=comp2);

// "?"      Ternary Operator
//console.log("comp1 ? comp2 is ", comp1?comp2);


//Logical Operators
let x=5;
let y=6;

// && And Operator
console.log(x<y && x==5);

// || Or Operator
console.log(x>y||x==5);

// Not Operator
console.log(!false);
console.log(!true);


"use strict";
const ps=require("prompt-sync");
const prompt=ps();
// Conditional Expressions

let age=prompt("Hey whats your age?")
age=Number.parseInt(age);
console.log(typeof age);

if(age<0)
{
   // alert("This is a valid age")
   console.log("This is an invalid age");
}

else if(age<9)
{
    console.log("You are a kid");
}
else
{
    console.log("Valid Age");
}


//Ternary Operator
console.log("You ", (age<18 ? "cant drive": "can drive"));

// Homework : Explore switch statement and write a program
