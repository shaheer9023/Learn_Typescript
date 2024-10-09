"use strict";
// before making this project first read  README file for your help and instructions
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
let n1 = parseInt(prompt("Enter the first number: "));
let n2 = parseInt(prompt("Enter the second number: "));
let operator = prompt("Enter the operator: (+,-,*,/) ");
switch (operator) {
    case '+':
        console.log("the result of ", n1, operator, n2, "is", (n1 + n2));
        break;
    case '-':
        console.log("the result of ", n1, operator, n2, "is", n1 - n2);
        break;
    case '*':
        console.log("the result of ", n1, operator, n2, "is", (n1 * n2));
        break;
    case '/':
        console.log("the result of ", n1, operator, n2, "is", n1 / n2);
        break;
    default:
        console.log("Invalid operator");
        break;
}
