"use strict";
// splice method
// syntax
let a = [1, 2, 3, 4, 5];
// let b = a.splice(start point, number of elements, elements to be added);
let b = a.splice(1, 3, 6, 7); //
console.log('b', b); //[2, 3, 4,]
console.log('original array', a); //[1, 6, 7, 5]
// example
let names = ["Shaheer", "Ali", "Ahmed", "Hassan", "Anas"];
console.log('complete names', names); // ['Shaheer', 'Ali', 'Ahmed','Hassan','Anas']
let selectedNames = names.splice(1, 3, "Soban", "Muzammil", "Shoaib");
console.log('selected names', selectedNames); // ['Ali', 'Ahmed','Hassan','Anas']
// lekin ab original array me se selected elements remove ho jayengay or new names add ho jayengay
console.log("original array after splice", names); // ['Shaheer','Soban', 'Muzammil', 'Shoaib', 'Anas']
