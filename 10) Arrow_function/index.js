"use strict";
//  Arrow Function
// syntax
// let arrowfunction= () => {  }; Also called anonymous function OR lambda function
// General example
let Name = () => {
    console.log("Shaheer");
};
Name();
// Another example
let add = () => {
    let a = 10;
    let b = 20;
    console.log(a + b);
};
add();
// Another example
let myname = () => {
    let name = "Shaheer";
    return name;
};
console.log('My name is ' + myname());
// another example with another method
// let myname1=()=>() yahan pr jo bracket arrow k baad h uska mtlab h return
let myname1 = () => ("Shaheer");
let name1 = myname1();
console.log('My name is ' + name1);
// another example with same method
let Add = () => (2 + 2);
let total = Add();
console.log("Total is " + total);
