// Math Objects
// 1) Math.round() - Returns the value of a number rounded to the nearest integer
// 2) Math.ceil() - Returns the value of a number rounded up to the nearest integer
// 3) Math.floor() - Returns the value of a number rounded down to the nearest integer
// 4) Math.trunc() - Returns the integer part of a number
// 5) Math.pow() - Returns the value of x to the power of y
// 6) Math.sqrt() - Returns the square root of a number
// 7) Math.min() - Returns the smallest number
// 8) Math.max() - Returns the largest number
// 9) Math.random() - Returns a random number between 0 and 1

console.log('==== Math.round ====');
let a: number = 10.6;
console.log(Math.round(a)); // 11

console.log('==== Math.ceil ====');
let b: number = 10.4;
console.log(Math.ceil(b)); // 11

console.log('==== Math.floor ====');
let c: number = 10.6;
console.log(Math.floor(c)); // 10

console.log('==== Math.trunc ====');
let d: number = 10.6;
console.log(Math.trunc(d)); // 10

console.log('==== Math.pow ====');

console.log('Syntax: Math.pow(number, how many times to raise the number)');

console.log('2^2 = ' + Math.pow(2, 2)); // 4
console.log('2^3 = ' + Math.pow(2, 3)); // 8
console.log('6^8 = ' + Math.pow(6, 8)); // 1679616

console.log('==== Math.sqrt ====');
let e: number = 25;
console.log(Math.sqrt(e)); // 5

console.log('==== Math.min ====');
let f: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.min(...f)); // 1

console.log('==== Math.max ====');
let g: number[] = [543, 454, 344, 54, 34, 23, 17, 62, 30, 28];
console.log(Math.max(...g)); // 543

console.log('==== Math.random ====');
console.log(Math.random());//every time we run this we will get different random number










