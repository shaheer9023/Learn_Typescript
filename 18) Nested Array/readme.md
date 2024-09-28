# Nested Arrays in TypeScript

## Introduction
Nested arrays, also known as multi-dimensional arrays, are arrays that contain other arrays as their elements. This structure allows you to organize complex data in a more manageable way.

## Example 1: Number Array

### Code Explanation
```javascript
console.log('========================================');
console.log('EXAMPLE OF NUMBER ARRAY');
console.log('========================================');

// Nested array creation
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log('this is nested array', arr);
```
1. **Array Creation**: Pehla code `const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]` aik nested array banata hai jismein 3 arrays hain.
2. **Console Log**: `console.log('this is nested array', arr);` nested array ko print karta hai. Output hoga: `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`.

### Accessing Elements
```javascript
console.log('index 0 of main array and index 0 of nested array', arr[0][0]); // Output: 1
console.log('index 0 of main array', arr[0]); // Output: [ 1, 2, 3 ]
console.log('index 2 of main array and index 2 of nested array', arr[2][2]); // Output: 9
```
- `arr[0][0]` se pehli array (0 index) ke pehle element ko access karte hain jo `1` hai.
- `arr[0]` se pehli array ko access karte hain, output `[1, 2, 3]` hai.
- `arr[2][2]` se teesri array (index 2) ka teesra element (index 2) access kar rahe hain, jo `9` hai.

## Example 2: Any Array

### Code Explanation
```javascript
console.log('========================================');
console.log('EXAMPLE OF ANY ARRAY');
console.log('========================================');

// Mixed array creation
let names: any = ["shaheer", "ali", "khan", ["1", "2", "3"]];
console.log('example of nested array', names);
```
1. **Mixed Array Creation**: `let names: any = ["shaheer", "ali", "khan", ["1", "2", "3"]]` mixed array banata hai jismein strings aur aik nested array hai.
2. **Console Log**: `console.log('example of nested array', names);` isay print karega. Output hoga: `['shaheer', 'ali', 'khan', ['1', '2', '3']]`.

### Accessing Elements
```javascript
console.log('example of nested array', names[3][2]); // Output: 3
console.log('index 3 of main array', names[3]); // Output: [ '1', '2', '3' ]
console.log('index 0 of main array', names[0]); // Output: shaheer
```
- `names[3][2]` se nested array se teesra element (index 2) access karte hain, jo `3` hai.
- `names[3]` se nested array ko access karte hain, output `['1', '2', '3']` hai.
- `names[0]` se pehla element `shaheer` ka access karte hain.

## Conclusion
Nested arrays allow for a structured way to hold related data. This example outlines how to create and access nested arrays in JavaScript, showcasing both purely numeric arrays and mixed value arrays.

---

## Notes
- Har index zero-based hota hai, yaani pehla element index `0` par hota hai.
- JavaScript mein arrays dynamically sized hote hain, isliye unhein run-time par badal sakte hain.
- Nested arrays ko samajhna complex data ko manage karne mein madad karta hai.
