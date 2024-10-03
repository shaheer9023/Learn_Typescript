# Objects in TypeScript/JavaScript

### 1. **Object Syntax**

```js
let object = {
    key1: value1,
    key2: value2
};
```

Yeh object ka basic syntax hai. Object ko curly braces `{}` ke andar define karte hain. Har key ka aik value hota hai jo `key: value` ke format mein likha jata hai.

---

### 2. **Example 1: User Object**

```js
let user = {
    firstname: "Shaheer",
    lastname: "Ahmad",
    age: 21,
    Hobbies: ["Reading", "Singing", "Dancing"],
    salary: () => { return 200000 }
};
```

Yeh aik `user` object hai jisme multiple properties hain:

- `firstname`: Shaheer (String type)
- `lastname`: Ahmad (String type)
- `age`: 21 (Number type)
- `Hobbies`: Aik array jisme user ke hobbies hain (["Reading", "Singing", "Dancing"]).
- `salary`: Aik function jo 200000 return karta hai.

### 3. **Object Properties ko Console mein Print Karna**

```js
console.log('user is :', user);
```
Is line se pura `user` object console mein print hota hai. Ismein sari properties nazar aayengi.

```js
console.log('user firstname is :', user.firstname);
```
Yahan sirf `firstname` ko access kiya aur print kiya gaya hai.

```js
console.log('user lastname is :', user.lastname);
console.log('user age is :', user.age);
```
Isi tarah `lastname` aur `age` ko access karke print kiya gaya hai.

```js
console.log('user fullname is :', user.firstname + ' ' + user.lastname);
```
Yahan `firstname` aur `lastname` ko combine karke full name print kiya gaya hai.

---

### 4. **Hobbies ko Print Karna**

```js
console.log('user Hobbies are :', user.Hobbies);
```
Yahan user ke hobbies array ko print kiya gaya hai.

```js
console.log('user Hobbies length is :', user.Hobbies.length);
```
Is line mein hobbies array ka length print hota hai, yani kitni hobbies hain.

```js
console.log("user's first Hobbies is :", user.Hobbies[0]);
console.log("user's 2nd Hobbies is :", user.Hobbies[1]);
```
Array ke index se specific hobby ko access kiya gaya hai, jaise pehli hobby `Reading` aur doosri hobby `Singing`.

---

### 5. **Salary Function ko Access Karna**

```js
console.log('user salary is :', user.salary());
```
Yahan salary ko ek function ki tarah call kiya gaya hai aur uska return value `200000` print hota hai.

---

### 6. **Object ki Property ko Delete Karna**

```js
delete user.salary;
```
`delete` keyword ka use karke `salary` property ko delete kiya gaya hai.

```js
console.log('======AFTER DELETION========');
console.log('user is :', user);
```
Yahan object ko dobara print kar rahe hain, aur `salary` property delete hone ke baad wo nazar nahi aayegi.

---

### 7. **Object mein Search Karna**

```js
console.log('email' in user); // false
console.log('age' in user); // true
```
`in` operator ka use karke yeh check karte hain ke object mein koi specific property exist karti hai ya nahi. Jaise:

- `email` property nahi hai, isliye `false` aayega.
- `age` property hai, isliye `true` aayega.

---

### 8. **Nested Objects**

```js
let address = {
    city: "Lahore",
    country: "Pakistan",
    state: "Punjab",
    myaddress: {
        address1: "Lahore",
        address2: "Punjab",
        address3: "Sindh"
    }
};
```
Yeh ek nested object hai jisme `myaddress` ke andar ek aur object define kiya gaya hai.

```js
console.log('my address is :', address.myaddress);
```
Yahan nested object ko access kiya gaya hai.

```js
console.log('my address 1 :', address.myaddress.address1);
console.log('my address 2 is :', address.myaddress.address2);
```
Yeh specific keys ko access kar rahe hain jo nested object ke andar hain.

---

### 9. **Saari Keys ko Access Karna**

```js
console.log(Object.keys(user)); // method 1
```
`Object.keys(user)` function ka use karke object ki sari keys ko ek array ke form mein access kar sakte hain.

```js
for (let key in user) {
    console.log(key); // method 2
}
```
`for...in` loop ka use karke object ke andar jo bhi keys hain unko ek-ek karke print kar sakte hain.

