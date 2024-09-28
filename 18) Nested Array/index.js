"use strict";
// Nested Arrays
// syntax
console.log('========================================');
console.log('EXAMPLE OF NUMBER ARRAY');
console.log('========================================');
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log('this is nexted array', arr); //output is [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]
// print it using index
console.log('index 0 of main array and index 0 of nested array', arr[0][0]); // output is 1
console.log('index 0 of main array', arr[0]); // output is [ 1, 2, 3 ]
console.log('index 2 of main array and index 2 of nested array', arr[2][2]); // output is 9
console.log('========================================');
console.log('EXAMPLE OF ANY ARRAY');
console.log('========================================');
let names = ["shaheer", "ali", "khan", ["1", "2", "3"]];
console.log('example of nested array', names); //output is [ 'shaheer', 'ali', 'khan', [ '1', '2', '3' ] ]
// print it using index
console.log('example of nested array', names[3][2]); // output is 3
console.log('index 3 of main array', names[3]); // output is [ '1', '2', '3' ]
console.log('index 0 of main array', names[0]); // output is shaheer
