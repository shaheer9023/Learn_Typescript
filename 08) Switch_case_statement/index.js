"use strict";
//  Switch Case Statements
//  syntax
// switch (expression) {
//     case value1:  
//         statement1;
//         break;
//     case value2:
//         statement2;
//         break;
//     default:
//         statement3;
// }
// switch case is just same like if else condition
// Example 1
console.log('____________________');
console.log('Example 1');
console.log('____________________\n\n'); // (\n is for new line)
let day = 4; //here value of day is 4 and it will print thursday because of case 4
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}
// Example 2
console.log('____________________');
console.log('Example 2');
console.log('____________________\n\n'); // (\n is for new line)
let grade = "A"; //here value of grade is A and it will print Excellent because of case A
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Invalid grade");
}
// Example 3
console.log('____________________');
console.log('Example 3');
console.log('____________________\n\n'); // (\n is for new line)
let marks = 75; // here value of marks is 75 and it will print Grade C because of case 75
switch (true) {
    case marks > 90 && marks <= 100:
        console.log("Grade A");
        break;
    case marks > 80 && marks <= 90:
        console.log("Grade B");
        break;
    case marks > 70 && marks <= 80:
        console.log("Grade C");
        break;
    case marks > 60 && marks <= 70:
        console.log("Grade D");
        break;
    case marks > 50 && marks <= 60:
        console.log("Grade E");
        break;
    case marks > 40 && marks <= 50:
        console.log("Grade F");
        break;
    default:
        console.log("Marks are not in range");
}
