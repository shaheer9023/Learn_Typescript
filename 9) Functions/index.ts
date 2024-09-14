//  Functions in typescript
//  syntax:
// without parameters
// function functionname() {};
// functionname();
// with parameters
// function functionname(parameter1, parameter2) {};
// functionname(10, 20);

//  example without parameters
function greet() {
    console.log("hello");
}
greet();//function ko aesay call karty hain

// Another method
function Greet() {
    return "hello";
};
let GreeT = Greet();
console.log(GreeT);

// Another Example
function total(){
    let total=2+2;
    return total;
}
console.log(total());
// Another way to print the same function
let Total=total();
console.log('total is',Total);

