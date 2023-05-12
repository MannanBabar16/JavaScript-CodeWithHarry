// Homework : Explore switch statement and write a program

// Calculator Program using Switch Statements

"use strict";
const ps=require("prompt-sync");
const prompt=ps();


let number1;
let num1;
let number2;
let num2;
let operator;
let execution;



do{

     number1=prompt("Enter Number 01: ");
     num1=parseInt(number1);
    
     number2=prompt("Enter Number 02: ");
     num2=parseInt(number2);
    
     console.log("Select from following Options \n Enter + for addition: \n Enter - for Subtraction: \n Enter * for Multiplication: \n Enter / for Division: \n Enter % for Modulus: \n ");

     operator=prompt("Enter: ")

    switch(operator)
    {
        case "+":
            console.log(num1," + ", num2," = ",num1+num2 ,"\n");
            break;
    
        case "-":
            console.log(num1," - ",num2," = ",num1-num2,"\n");
            break;
    
        case "*":
            console.log(num1," * ",num2," = ",num1*num2,"\n");
            break;
    
         case "/":
            console.log(num1," / ",num2," = ",num1/num2,"\n");
            break;
    
         case "%":
            console.log(num1," % ",num2," = ",num1%num2,"\n");
            break;
    
         default:
            console.log("Enter valid operator","\n");
           break;
           
    }

    execution=prompt("Do you want to continue? Y or N : ","\n");

}while(execution=="Y");


