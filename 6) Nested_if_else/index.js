"use strict";
// nested if else statements
let username = "shaheer";
let password = 1234;
let code = "1234";
console.log('_____________________');
console.log('CORRECT INFORMATION');
console.log('_____________________');
if (username == "shaheer" && password == 1234) { //if username and password are correct then only proceed otherwise last else block will be executed
    console.log('kindly provide code');
    if (code == "1234") {
        console.log('_______________________________________________');
        console.log('welcome to your account ' + username);
        console.log('_______________________________________________');
    }
    else {
        console.log('invalid code');
    }
}
else {
    console.log('login failed');
}
// now provide wrong information and check
console.log('_____________________');
console.log('WRONG INFORMATION');
console.log('_____________________');
if (username == "shaheer" && password == 345) { //here password is wrong so last else will be executed
    console.log('kindly provide code');
    if (code == "1234") {
        console.log('login successful');
    }
    else {
        console.log('invalid code');
    }
}
else {
    console.log('login failed');
}
