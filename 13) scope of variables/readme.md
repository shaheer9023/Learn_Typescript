# scope of variables in TypeScript (aur JavaScript)
## these are three types of variables
 * `var`,
 * `let`
 * `const`

### 1. **`var`**:
- **Scope**: `var` function-scoped hota hai. Agar aap kisi block (jaise `if` ya `for` loop) ke andar `var` ko define karte hain, toh wo us block ke bahar bhi accessible hota hai. 
- **Re-declaration**: `var` ko dubara declare karna allowed hota hai.
- **Hoisting**: `var` hoisting karta hai, yaani pehle declare kar deta hai aur baad mein usay initialize karta hai. Agar aap `var` ko use karte hain usay declare karne se pehle, koi error nahi hoti, lekin value `undefined` hoti hai.

```typescript
function testVar() {
    var x = 10;
    if (true) {
        var x = 20;  // Yeh block ke bahar bhi accessible hai
        console.log(x); // 20
    }
    console.log(x); // 20
}
testVar();
```

### 2. **`let`**:
- **Scope**: `let` block-scoped hota hai, yaani agar aap isay kisi block ke andar define karte hain, toh wo sirf us block ke andar hi accessible hota hai.
- **Re-declaration**: `let` ko ek hi scope ke andar dubara declare nahi kar sakte.
- **Hoisting**: `let` hoisting karta hai lekin "temporal dead zone" ke wajah se declare karne se pehle use nahi kar sakte.

```typescript
function testLet() {
    let x = 10;
    if (true) {
        let x = 20;  // Yeh block ke andar hi restricted hai
        console.log(x); // 20
    }
    console.log(x); // 10
}
testLet();
```

### 3. **`const`**:
- **Scope**: `const` bhi block-scoped hota hai, `let` ki tarah.
- **Re-declaration**: `const` ko dubara declare nahi kar sakte.
- **Re-assignment**: `const` ko ek baar assign karne ke baad uski value change nahi kar sakte. Lekin agar `const` object ya array hai, to uske internal properties ko modify kar sakte hain.
- **Hoisting**: `const` bhi `let` ki tarah hoisting karta hai lekin "temporal dead zone" mein rehta hai.

```typescript
function testConst() {
    const x = 10;
    if (true) {
        const x = 20;  // Yeh block ke andar hi restricted hai
        console.log(x); // 20
    }
    console.log(x); // 10
    
    // x = 30;  // Error: `x` ko dobara assign nahi kar sakte
}
testConst();
```

### Mukhtasir Tafreeq:
1. **`var`**: Function-scoped, dubara declare kar sakte hain, hoisting ke saath.
2. **`let`**: Block-scoped, dubara declare nahi kar sakte, hoisting ke saath lekin "temporal dead zone" mein.
3. **`const`**: Block-scoped, dubara declare nahi kar sakte, aur re-assign bhi nahi kar sakte, hoisting ke saath. 

Is tara se, `let` aur `const` zyada control aur predictability provide karte hain as compared to `var`.

### Hoisting
Hoisting ka matlab hai ke variables ya functions ko unki declaration se pehle hi memory mein upar le aana, lekin `let` aur `const` ke case mein unka use sirf unki actual line se baad mein hota hai.

## example


```typescript
console.log(x);  // Output: undefined (hoisting ki wajah se)
var x = 10;
```

Is code mein `var x` ko pehle memory mein le jata hai (hoist karta hai), lekin usay initialize nahi karta, isliye `console.log(x)` pehle `undefined` print karta hai.

Agar hum `let` use karte hain:

```typescript
console.log(x);  // Error: Cannot access 'x' before initialization
let x = 10;
```

Yahaan `let` ki wajah se hoisting hoti hai lekin variable "temporal dead zone" mein hota hai, jiski wajah se initialize hone se pehle usay access nahi kar sakte.

### Temporal Dead Zone (TDZ)
**Temporal Dead Zone (TDZ)** wo waqt hota hai jab `let` ya `const` se declare kiya gaya variable hoist hone ke bawajood uski initialization se pehle access nahi kiya ja sakta.

Example:

```typescript
console.log(x);  // Error: Cannot access 'x' before initialization
let x = 10;
```

Is code mein `let x` hoist ho gaya hai, lekin jab tak `let x = 10;` nahi chalti, usse pehle usay access karna TDZ ke wajah se error deta hai. TDZ ka matlab hai ke variable declare hone se pehle use nahi kiya ja sakta.