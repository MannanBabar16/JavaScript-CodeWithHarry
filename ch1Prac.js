//Q1: Create a varriable of type String & try to add a number to it

let a ="name";
let b=6;
console.log(a+b);


//Q2: Use type of operator to find the datatype of string in last question

console.log(typeof (a+b));


//Q3: Create a const object in JS, can you change it to hold a number later? NO

const a1={
    name:"harry",
    section:1,
    isPrincipal:false,
}

//a1=56;



//Q4: Try to add a new key to the const object in Problem3. were you able to do it?


a1['friend']="Topg";
a1['name']="Topg";
console.log(a1);


//Q5: Write a JS Program to create a word-meaning dictionary of 5 words

const dict={
    Ambigue:"An ambiguous expression or statement",
    Athleisure:"Comfortable and casual footwear & clothing designed for exercise and rigorous activity",
    Blert:"A cowardly person, someone who is weak",
    Cringe:"To feel ashamed or embarrassed by what someone else is doing or saying",
    Ebullient:"Unrestrained joyously"
}

console.log(dict.Cringe);