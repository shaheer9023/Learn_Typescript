// Nested Loops
// syntax: 
// for (let initialization; condition; increment) {

import { log } from "console";

// for (let initialization; condition; increment) {

//          body
//     }
// }
//

// lets make a payramid with nested loops

let a:string="";
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        a=a+"*";
    }
    a=a+"\n";
}
console.log(a)

// now again make a pyramid and get value of rows from user
// for this we will use promt module
// for prompt module we need to install it
// command : npm i prompt-sync
// npm i --save-dev @types/node

let prompt=require("prompt-sync")();

let rows:number=parseInt(prompt("Enter the number of rows : "));
let num:number=0;
for(let i=1;i<=rows;i++){
    let output:string="";
    for(let j=1;j<=i;j++){
        output+=j;
    }
    console.log(output);
}




