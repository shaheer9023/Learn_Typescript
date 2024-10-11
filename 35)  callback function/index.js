"use strict";
// callback function
// callback function is a function that is passed as an argument to another function
// The callback function can return another function
function hello(callback) {
    callback();
}
let arrowFunction = () => {
    console.log('This is callback function');
};
hello(arrowFunction);
