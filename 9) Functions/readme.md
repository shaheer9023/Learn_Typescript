
# Functions in TypeScript

## Syntax:

### Without parameters:
```typescript
function functionname() {};
functionname();
```

### With parameters:
```typescript
function functionname(parameter1, parameter2) {};
functionname(10, 20);
```

## Example Without Parameters:
```typescript
function greet() {
    console.log("hello");
}
greet(); // function ko aesay call karty hain
```
###  Explanation:
Yeh ek simple function hai jo sirf "hello" print karta hai. Jab aap `greet()` ko call kartay ho, yeh function ka code execute hota hai aur "hello" print hota hai.

---

## Another Method:
```typescript
function Greet():string {
    return "hello";//jb bhi koi function return kartey hain to  uski data type bhi likhty hain
};
let GreeT = Greet();
console.log(GreeT);
```
###  Explanation:
Yahaan pe hum ne ek function banaya hai jo "hello" return karta hai. `GreeT` variable ko function se return honay wala value de diya, aur phir usko console pe print kar diya.

---

## Another Example:
```typescript
function total():number{
    let total=2+2;
    return total;
}
console.log(total());
```
###  Explanation:
Is function mein `2+2` ki calculation ki gayi aur `total` function ka result return kar diya gaya. `console.log(total())` is result ko print karta hai.

---

## Another Way to Print the Same Function:
```typescript
let Total = total();
console.log('total is',Total);
```
###  Explanation:
Is example mein hum ne `total()` function ko run kar ke uska result `Total` variable mein store kiya aur phir usko print kiya.

## Note
jab bhi koi function return hoga uski data type bhi likhni hogi
