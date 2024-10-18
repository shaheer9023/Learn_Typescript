"use strict";
// Set TimeOut
// kisi bhi cheez ko delay krny k liye hum is ko use karte hai
// Syntax
// setTimeout(function, time)
console.log('Hello');
// // ab hum chahty hain k hello k baad shaheer print ho magar 1 second ke baad to us k liye hum is function use karaingay
setTimeout(() => {
    console.log('Shaheer Ahmad');
}, 1000);
// // ab me chahta hoon 5 seconds k baad {son of Fiaz Ahmad print ho to same function hoga 1000 ki jgh 5000 aayga q k ye value miliseconds me h }
setTimeout(() => {
    console.log('Son of Fiaz Ahmad');
}, 5000);
// Set Interval
// kisi bhi cheez ko repeat krny k liye hum is ko use karte hai
// Syntax
// setInterval(function, time)
console.log('Hello');
// // ab hum chahty hain k hello k baad shaheer bar bar print ho
// setInterval(() => {
//     console.log('Shaheer Ahmad');
// }, 1000);
// mage me chahta hoon bs 5 baar mera naam print ho
let count = 0;
let namee = setInterval(() => {
    count++;
    console.log(count, ". Shaheer Ahmad");
    if (count >= 5) {
        clearInterval(namee);
    }
}, 1000);
