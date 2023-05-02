//#02 Variables & Data
console.log("\n#02")
let a = 10;
console.log(a);

a = 'TopG'; //a="TopG"
console.log(a);



//#03 Let, Var, Const
console.log("\n#03")
let b="Topg";
const author="harry";
b=4;
let c=null;
let d=undefined;
{
    let b='this'
    console.log(b)

}
console.log(b);



//#04 Primitives data types (NN DB SS U) & ojects

//primitive
console.log("\n#04")
let aa=null;
let bb=345;
let cc=true;
let dd=BigInt("567");
let ee="TopG";
let ff=Symbol("I am a nice symbol");
let gg=undefined;

//printing all
console.log(aa,bb,cc,dd,ee,ff,gg);

//printing data type of dd
console.log(typeof dd);


//Objects/Non primitive
const item={
    "Andrew":true,
    "Tristan":false,
    "Luc":67,
    "Gorgiana":undefined
}

console.log(item);
console.log(item["Andrew"]);


//Quick Quiz
const Student={
    name:"TopG",
    phoneNumber:123456,
    marks:100,
}
console.log("Quick Quiz: \n",Student);