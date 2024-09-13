// Else if condition

let username = "Ahmad";
let password = 4414;
let code = "1234";
console.log('_____________________');
console.log('NOW ELSE IF BLOCK IS USED');
console.log('_____________________');
if (username == "shaheer" && password == 1234) {
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
else if (username == "Ahmad" && password == 4414) { //now this condition is true
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
