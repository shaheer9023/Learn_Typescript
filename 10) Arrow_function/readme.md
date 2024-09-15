
# TypeScript Arrow Functions 

Arrow Functions JavaScript mein anonymous ya lambda functions kehlate hain. Ye functions ko concise tareeqay se likhne ka tareeqa dete hain. Aapko "function" keyword likhne ki zaroorat nahi hoti.

### Syntax:
```javascript
let arrowFunction = () => {  };
```
Yahan `arrowFunction` aik variable hai jisme aik anonymous function store kiya gaya hai.

##  Examples:

### Example 1: Simple Arrow Function
```javascript
let Name = () => {
    console.log("Shaheer");
};
Name();
```
**Explanation**: Is example mein aik arrow function `Name` banaya gaya hai jo `console.log` se "Shaheer" print karta hai.

### Example 2: Adding Two Numbers
```javascript
let add = () => {
    let a = 10;
    let b = 20;
    console.log(a + b);
};
add();
```
**Explanation**: Yahan pe do variables `a` aur `b` ko define kar ke unko add kar ke result print kiya gaya hai.

### Example 3: Return a String with TypeScript
```javascript
let myname = (): string => {
    let name: string = "Shaheer";
    return name;
};
console.log('My name is ' + myname());
```
**Explanation**: Ye arrow function aik string type ka return value deta hai, jo "Shaheer" hai.

### Example 4: Implicit Return Method 1
```javascript
let myname1 = () => ("Shaheer");
let name1 = myname1();
console.log('My name is ' + name1);
```
**Explanation**: Yahan par arrow function direct aik value return kar raha hai bina curly brackets ke.

### Example 5: Implicit Return Method 2
```javascript
let Add = () => (2 + 2);
let total = Add();
console.log("Total is " + total);
```
**Explanation**: Is function mein numbers ka addition return ho raha hai aur result "Total is 4" print karta hai.

## Conclusion:
Arrow functions ka use functions ko chhota aur concise likhne ke liye hota hai. Aap curly brackets aur return statement ko avoid kar sakte hain agar function single expression return kar raha ho.
