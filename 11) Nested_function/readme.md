
# Nested Functions in Typescript

## Nested Functions ka Syntax:
```
function outerFunction() {
    function innerFunction() {
    }
    return innerFunction;
}
outerFunction();
```

Yeh nested function ka aik example hai. Aik function ke andar doosra function banaya jaata hai. `innerFunction` ko `outerFunction` ke andar define karte hain.

## Example 1: Simple Nested Function ka Example
```js
function outerFunction() {
    function innerFunction() {
    }
    return 2 + 2;
}
console.log('outerFunction', outerFunction());
```
Is example me `outerFunction` ke andar aik `innerFunction` banayi gayi hai, lekin humne `innerFunction` ko return nahi kiya, balkay direct aik calculation return ki jo 2+2 hai. Jab hum `outerFunction()` ko call karte hain, tou output `4` aata hai.

## Example 2: Same Example with Arrow Function
```js
const outerFunction2 = () => {
    const innerFunction = () => {
    }
    return 2 + 2;
}
console.log('outerFunction2', outerFunction2());
```
Yeh example wohi kaam arrow function syntax ke zariye karta hai. Yeh modern aur concise syntax hai jo JavaScript me arrow function kehlata hai.

## Example 3: String Return Karne Wala Function
```js
let declareName = () : string => {
    return "shaheer";
}
console.log('declareName', declareName());
```
Yeh aik simple arrow function hai jo aik string `"shaheer"` return karta hai. Function ka naam `declareName` hai aur jab isse call karte hain tou output `"shaheer"` hota hai.

## Example 4: Nested Arrow Functions
```js
let callname = (): string => {
    return declareName();
}
console.log('callname', callname());
```
Is example me aik arrow function `callname` banaya gaya hai jo `declareName` ko call karta hai aur uska result return karta hai. Jab hum `callname()` ko call karte hain, tou result `"shaheer"` aata hai.
