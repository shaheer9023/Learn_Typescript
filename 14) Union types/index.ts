//  Union types
// type A = string | number
// type B = string & number
//  Example
// let  mobile: string = "samsung"
// mobile =33202 error Type 'number' is not assignable to type 'string'
// now solve this problem we use union types
let mobile: string | number = "samsung"
mobile =33202
console.log('mobile', mobile);
