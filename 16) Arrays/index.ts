//  Arrays
//  syntax
// let array:datatype=[];

let a: number[] = [1, 2, 3];
// here 1 is at index 0 and 2 is at index 1 and 3 is at index 2
// lets explain this
console.log('|----------------------------------------|');
console.log('explanation of array a', a);
console.log('|----------------------------------------|');

console.log('length of array', a.length);
console.log('element at index 1', a[1]);// 2
console.log('element at index 2', a[2]);// 3
console.log('element at index 0', a[0]);// 1




let b:string[] = ['a', 'b', 'c'];
// similarly here 'a' is at index 0, 'b' is at index 1 and 'c' is at index 2
// now lets explain this
console.log('|--------------------------------------|');
console.log('explanation of array b', b);
console.log('|--------------------------------------|');

console.log('length of array', b.length);
console.log('element at index 1', b[1]);// b
console.log('element at index 2', b[2]);// c
console.log('element at index 0', b[0]);// a

// type unions in arrays
let c: (string | number)[] = [1, 'b', 3];
console.log('|--------------------------------------|');
console.log('explanation of array c', c);
console.log('|--------------------------------------|');
console.log('length of array', c.length);
console.log('element at index 1', c[1]);// b
console.log('element at index 2', c[2]);// c
console.log('element at index 0', c[0]);// a


