"use strict";
// callback function
// callback function is a function that is passed as an argument to another function
// The callback function can return another function
// general Example
function hello(callback) {
    callback();
}
let arrowFunction = () => {
    console.log('This is callback function');
};
hello(arrowFunction);
// Easy level example 1
function greetUser(callback) {
    console.log('User is about to be greeted:');
    callback();
}
let sayHello = () => {
    console.log('Hello, Shaheer!');
};
greetUser(sayHello);
// Easy level example 2
function compute(number, callback) {
    let result = callback(number);
    console.log(`Result: ${result}`);
}
let square = (n) => n * n;
compute(5, square);
// Medium level example 1
function processArray(items, callback) {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}
let printDouble = (num) => {
    console.log(num * 2);
};
processArray([1, 2, 3, 4], printDouble);
// Medium level example 2
function fetchData(callback) {
    setTimeout(() => {
        let data = "Data fetched from server";
        callback(data);
    }, 2000);
}
let displayData = (data) => {
    console.log(data);
};
fetchData(displayData);
// Difficult level example 1
function outerFunction(callback) {
    let innerFunction = callback();
    console.log(innerFunction());
}
let createGreeting = () => {
    return () => {
        return "Hello from the inner function!";
    };
};
outerFunction(createGreeting);
// Difficult level example 2
function fetchWithCallback(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}
let handleData = (data) => {
    console.log('Fetched Data:', data);
};
fetchWithCallback('https://api.example.com/data', handleData);
