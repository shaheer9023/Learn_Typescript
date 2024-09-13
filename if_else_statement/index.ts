// if else

// syntax
// if (condition) {
//     // do something
// } else {
//     // do something else
// }

// example
console.log('true condition');

if(true){
    console.log('welcome home'); //condition true hogi to if block execute ho jayega    
}
else{
console.log('Bye!'); //condition false hogi to else block execute ho jayega

}

// same example with false condition
console.log('false condition');

if (false) {
    console.log('welcome home'); //condition true hogi to if block execute ho jayega    
}
else {
    console.log('Bye!'); //condition false hogi to else block execute ho jayega
}

// Another example
let Username: string = 'Shaheer';//here  first letter of Shaheer is capital 
if (Username === 'Shaheer') {
    console.log('Hi Shaheer');
}
else {
    console.log('Bye!');
}

// same example with case sensitivity


if (Username == 'shaheer') {//here  first letter of shaheer is small
    console.log('Hi Shaheer');
}
else {
    console.log('Bye!');//now it will print bye because it is case sensitive means it will not match with shaheer
}
// Another example 
let password:number = 1234;

if(Username === 'Shaheer' && password === 1234){
    console.log('Login Successful');
}
else{
    console.log('Login Failed');
}
//same example with else

if(Username === 'Shaheer' && password === 12345){//error because password is a number
    console.log('Login Successful');
}
else{
    console.log('Login Failed');
}