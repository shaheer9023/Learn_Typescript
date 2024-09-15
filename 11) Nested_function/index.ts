// Nested Functions
// syntax
// function outerFunction() {
//     function innerFunction() {
//     }
//     return innerFunction
// }
// outerFunction()

// Example
function outerFunction() {
    function innerFunction() {
    }
    return 2+2;
}
console.log('outerFunction', outerFunction());

// same example using arrow function

const outerFunction2 = () => {
    const innerFunction = () => {
    }
    return 2 + 2;
}
console.log('outerFunction2', outerFunction2());

//  Other Examples
let declareName =():string=>{
    return "shaheer";
}
console.log('declareName', declareName());
 

// nested
let callname=():string=>{
 return declareName();
}
console.log('callname', callname());
