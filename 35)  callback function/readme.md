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

### Easy Level Example 1

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

### Easy Level Example 2

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

### Medium Level Example 1

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

### Medium Level Example 2

**Description:** Async operation simulate karne wala callback.

```ts
function fetchData(callback: (data: string) => void) {
    setTimeout(() => {
        let data = "Data fetched from server";
        callback(data);
    }, 2000);
}

let displayData = (data: string) => {
    console.log(data);
};

fetchData(displayData);
```

#### Explanation:

1. **Function `fetchData` Banana:**
    - Yeh function ek `callback` leta hai.
    - `setTimeout` ke zariye 2 seconds ke baad data fetch simulate karta hai.
    - Phir `callback` ko fetched data ke sath call karta hai.

2. **Arrow Function `displayData` Define Karna:**
    - Yeh function received data ko console par print karta hai.

3. **Function Call:**
    - `fetchData(displayData)` se 2 seconds ke baad message print hoga.

**Output (After 2 seconds):**
```
Data fetched from server
```

---

### Difficult Level Example 1

**Description:** Callback function jo ek aur function return karta hai.

```ts
function outerFunction(callback: () => () => string) {
    let innerFunction = callback();
    console.log(innerFunction());
}

let createGreeting = () => {
    return () => {
        return "Hello from the inner function!";
    };
};

outerFunction(createGreeting);
```

#### Explanation:

1. **Function `outerFunction` Banana:**
    - Yeh function ek `callback` leta hai jo ek aur function return karta hai.
    - `callback()` ko call karke ek `innerFunction` milta hai.
    - Phir `innerFunction()` ko call karke result print karta hai.

2. **Arrow Function `createGreeting` Define Karna:**
    - Yeh function ek aur function return karta hai jo ek greeting message deta hai.

3. **Function Call:**
    - `outerFunction(createGreeting)` se pehle `createGreeting` call hoga, jo `innerFunction` return karega.
    - Phir `innerFunction` call hoga aur message print hoga.

**Output:**
```
Hello from the inner function!
```

---

### Difficult Level Example 2

**Description:** Callback ke zariye promise handle karna.

```ts
function fetchWithCallback(url: string, callback: (data: any) => void) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

let handleData = (data: any) => {
    console.log('Fetched Data:', data);
};

fetchWithCallback('https://api.example.com/data', handleData);
```

#### Explanation:

1. **Function `fetchWithCallback` Banana:**
    - Yeh function ek URL aur ek `callback` leta hai.
    - `fetch` API ka use karke data fetch karta hai.
    - Data milne par `callback(data)` ko call karta hai.
    - Agar error aata hai to console par error message print karta hai.

2. **Arrow Function `handleData` Define Karna:**
    - Yeh function fetched data ko console par print karta hai.

3. **Function Call:**
    - `fetchWithCallback('https://api.example.com/data', handleData)` se URL se data fetch hoga aur `handleData` ke through print hoga.

**Output (Agar URL valid hai):**
```
Fetched Data: { ...fetched data... }
```

**Ya Agar Error Aata Hai:**
```
Error: ...error message...
```

---

### Summary

**Callback Function:**
- Ek function jo doosre function ko argument ke taur par di jati hai.
- Asaan tareeqe se asynchronous operations handle karne me madad deti hai.
- JavaScript aur TypeScript me bohot commonly use hoti hain.

