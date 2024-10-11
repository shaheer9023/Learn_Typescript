// callback function
// callback function is a function that is passed as an argument to another function
// The callback function can return another function

// general Example
function hello(callback:any){
    callback();
}

let arrowFunction =() => {
    console.log('This is callback function');
    
  };

hello(arrowFunction);


//  example 1

function greetUser(callback: () => void) {
    console.log('User is about to be greeted:');
    callback();
}

let sayHello = () => {
    console.log('Hello, Shaheer!');
};

greetUser(sayHello);


//  example 2

function compute(number: number, callback: (num: number) => number) {
    let result = callback(number);
    console.log(`Result: ${result}`);
}

let square = (n: number) => n * n;

compute(5, square);


//  example 3

function processArray(items: number[], callback: (item: number) => void) {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

let printDouble = (num: number) => {
    console.log(num * 2);
};

processArray([1, 2, 3, 4], printDouble);

