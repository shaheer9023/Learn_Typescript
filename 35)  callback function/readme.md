# Callback Function in TypeScript

**Callback Function Kya Hai?**
Callback function ek aisi function hoti hai jo doosri function ko argument ke taur par di jati hai. Iska matlab hai ke aap ek function ko dusre function ke andar bhej sakte hain taake wo usay execute kare.

**General Example**

```ts
// callback function
// callback function ek aisi function hoti hai jo doosri function ko argument ke tor par di jati hai
// The callback function can return another function

function hello(callback: any) {
    callback();  // Yeh line callback function ko call karti hai
}

let arrowFunction = () => {
    console.log('This is callback function');
};

hello(arrowFunction);  // Yahan arrowFunction ko hello function ke andar pass kiya gaya hai
```

#### Step-by-Step Explanation:

1. **Function `hello` Banana:**
    ```ts
    function hello(callback: any) {
        callback();
    }
    ```
    - Yahan hum ne `hello` naam ka function banaya hai jo ek parameter `callback` leta hai.
    - `callback` ka type `any` set kiya gaya hai, matlab koi bhi type ki function pass ki ja sakti hai.

2. **Arrow Function Define Karna:**
    ```ts
    let arrowFunction = () => {
        console.log('This is callback function');
    };
    ```
    - Yahan hum ne `arrowFunction` naam ki ek arrow function banai hai jo console par ek message print karti hai.

3. **Callback Function Ko Call Karna:**
    ```ts
    hello(arrowFunction);
    ```
    - Yahan hum ne `hello` function ko call kiya aur `arrowFunction` ko argument ke taur par pass kiya.
    - `hello` function andar se `callback()` ko call karega, jo is case me `arrowFunction` ko execute karega.
    - Result: Console par "This is callback function" print hoga.

---

###  Example 1

**Description:** Simple callback function jo message print karti hai.

```ts
function greetUser(callback: () => void) {
    console.log('User is about to be greeted:');
    callback();
}

let sayHello = () => {
    console.log('Hello, Shaheer!');
};

greetUser(sayHello);
```

#### Explanation:

1. **Function `greetUser` Banana:**
    - Yeh function ek `callback` leta hai aur pehle ek message print karta hai.
    - Phir `callback()` ko call karta hai.

2. **Arrow Function `sayHello` Define Karna:**
    - Yeh function sirf "Hello, Shaheer!" print karta hai.

3. **Function Call:**
    - `greetUser(sayHello)` se pehle message aur phir `sayHello` ka message console par dikhega.

**Output:**
```
User is about to be greeted:
Hello, Shaheer!
```

---

###  Example 2

**Description:** Number ko square karne wala callback.

```ts
function compute(number: number, callback: (num: number) => number) {
    let result = callback(number);
    console.log(`Result: ${result}`);
}

let square = (n: number) => n * n;

compute(5, square);
```

#### Explanation:

1. **Function `compute` Banana:**
    - Yeh function ek number aur ek `callback` leta hai.
    - `callback` number ko process karke result return karta hai.
    - Phir result ko console par print karta hai.

2. **Arrow Function `square` Define Karna:**
    - Yeh function diye gaye number ko square karta hai.

3. **Function Call:**
    - `compute(5, square)` se pehle 5 ko square kiya jayega aur result print hoga.

**Output:**
```
Result: 25
```

---

###  Example 3

**Description:** Array ke har element ko process karne wala callback.

```ts
function processArray(items: number[], callback: (item: number) => void) {
    for (let i = 0; i < items.length; i++) {
        callback(items[i]);
    }
}

let printDouble = (num: number) => {
    console.log(num * 2);
};

processArray([1, 2, 3, 4], printDouble);
```

#### Explanation:

1. **Function `processArray` Banana:**
    - Yeh function ek array aur ek `callback` leta hai.
    - Loop ke zariye har element ko `callback` me pass karta hai.

2. **Arrow Function `printDouble` Define Karna:**
    - Yeh function number ko 2 se multiply karke print karta hai.

3. **Function Call:**
    - `processArray([1, 2, 3, 4], printDouble)` se har number ko double karke print kiya jayega.

**Output:**
```
2
4
6
8
```

---
