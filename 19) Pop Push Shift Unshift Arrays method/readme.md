
# TypeScript Array Methods (pop, push, shift, unshift)

## pop Method:
- **Kaam**: pop method array ke last element ko hata deta hai aur jo element remove hota hai usay return karta hai.
- **Kab Istemaal hota hai**: Jab hume array ke end se element ko remove karna ho.
- **Example**:
    ```js
    let names = ["shaheer", "ahmad", "rajput"];
    names.pop(); // "rajput" ko remove karta hai
    console.log(names); // ["shaheer", "ahmad"]
    ```

## push Method:
- **Kaam**: push method array ke end me ek ya zyada elements ko add karta hai aur nayi length ko return karta hai.
- **Kab Istemaal hota hai**: Jab hume array ke end me koi naya element ya values daalni ho.
- **Example**:
    ```js
    let names = ["shaheer", "ahmad", "rajput"];
    names.push("khan"); // "khan" ko add karta hai
    console.log(names); // ["shaheer", "ahmad", "rajput", "khan"]
    ```

## shift Method:
- **Kaam**: shift method array ke first element ko hata deta hai aur jo element remove hota hai usay return karta hai.
- **Kab Istemaal hota hai**: Jab hume array ke start se element ko remove karna ho.
- **Example**:
    ```js
    let names = ["shaheer", "ahmad", "rajput"];
    names.shift(); // "shaheer" ko remove karta hai
    console.log(names); // ["ahmad", "rajput"]
    ```

## unshift Method:
- **Kaam**: unshift method array ke start me ek ya zyada elements ko add karta hai aur nayi length ko return karta hai.
- **Kab Istemaal hota hai**: Jab hume array ke start me koi naya element ya values daalni ho.
- **Example**:
    ```js
    let names = ["shaheer", "ahmad", "rajput"];
    names.unshift("khan"); // "khan" ko add karta hai
    console.log(names); // ["khan", "shaheer", "ahmad", "rajput"]
    ```

Yeh methods arrays ke saath kaafi common hote hain jab hume elements ko remove ya add karna hota hai, chahe start se ho ya end se.
