// slice method
// syntax
let a: number[] = [1, 2, 3, 4, 5];
// let b = a.slice(start point, end point);
let b: number[] = a.slice(1, 3);// 2, 3
console.log('b', b);

// example
let names: string[] = ["Shaheer", "Ali", "Ahmed","Hassan","Anas"];
console.log('complete names', names);// ['Shaheer', 'Ali', 'Ahmed','Hassan','Anas']

let selectedNames: string[] = names.slice(1, 3);
console.log(selectedNames);// ['Ali', 'Ahmed']
