

# Operators in JavaScript/TypeScript

Ye document JavaScript/TypeScript ke mukhtalif operators ki wazahat aur unke code examples provide karta hai.

---

## 1. Arithmetic Operators

Ye operators basic mathematical operations perform karne ke liye use kiye jaate hain.

- **Addition (`+`)**: Do values ko add karta hai.
- **Subtraction (`-`)**: Pehli value se doosri value ko subtract karta hai.
- **Multiplication (`*`)**: Do values ko multiply karta hai.
- **Division (`/`)**: Pehli value ko doosri value se divide karta hai.

### Code Example:

```typescript
console.log('Arithmetic Operators');

let x: number = 10;
console.log(x + 5); // 15
console.log(x - 5); // 5
console.log(x * 5); // 50
console.log(x / 5); // 2
```

---

## 2. Assignment Operators

Ye operators variables ko values assign aur modify karne ke liye use kiye jaate hain.

- **Assignment (`=`)**: Ek value ko variable ko assign karta hai.
- **Add and Assign (`+=`)**: Variable ki existing value mein ek value add karta hai aur result assign karta hai.
- **Subtract and Assign (`-=`)**: Variable ki existing value se ek value subtract karta hai aur result assign karta hai.
- **Multiply and Assign (`*=`)**: Variable ki existing value ko ek value se multiply karta hai aur result assign karta hai.
- **Divide and Assign (`/=`)**: Variable ki existing value ko ek value se divide karta hai aur result assign karta hai.
- **Modulus and Assign (`%=`)**: Division ka remainder find karta hai aur result assign karta hai.
- **Exponentiation and Assign (`**=`)**: Variable ki existing value ko ek value ke power tak raise karta hai aur result assign karta hai.

### Code Example:

```typescript
console.log('Assignment Operators');

let y: number = 20;
console.log(y = 10); // 10
console.log(y += 1); // 11
console.log(y -= 1); // 10
console.log(y *= 1); // 10
console.log(y /= 1); // 10
```

---

## 3. Comparison Operators

Ye operators do values ko compare karte hain aur boolean result return karte hain.

- **Equal (`==`)**: Check karta hai agar do values equal hain, type ignore karke.
- **Strict Equal (`===`)**: Check karta hai agar do values equal hain aur same type ki hain.
- **Not Equal (`!=`)**: Check karta hai agar do values equal nahi hain, type ignore karke.
- **Strict Not Equal (`!==`)**: Check karta hai agar do values equal nahi hain ya phir type different hain.
- **Greater Than (`>`)**: Check karta hai agar pehli value doosri se greater hai.
- **Less Than (`<`)**: Check karta hai agar pehli value doosri se less hai.
- **Greater Than or Equal (`>=`)**: Check karta hai agar pehli value greater ya equal hai doosri value se.
- **Less Than or Equal (`<=`)**: Check karta hai agar pehli value less ya equal hai doosri value se.

### Code Example:

```typescript
console.log('Comparison Operators');

let z: number = 5;
console.log('5 == 5', z == 5); // true
console.log('5 === 5', z === 5); // true
console.log('5 != 5', z != 5); // false
console.log('5 !== 5', z !== 5); // false
console.log('5 > 7', z > 7); // false
console.log('5 < 7', z < 7); // true
console.log('5 >= 3', z >= 3); // true
console.log('5 <= 8', z <= 8); // true
```

---

## 4. Logical Operators

Logical operators multiple conditions ko combine karne ke liye use kiye jaate hain.

- **AND (`&&`)**: True return karta hai agar dono conditions true hain.
- **OR (`||`)**: True return karta hai agar kam se kam ek condition true hai.
- **NOT (`!`)**: True return karta hai agar condition false hai.

**Note:** Logical operators ke examples yahan nahi diye gaye hain, lekin ye conditions ko control karne ke liye use kiye jaate hain.

---

## 5. Conditional/Ternary Operator

Ye operator decisions lene ke liye use kiya jaata hai based on a condition.

- **Ternary (`? :`)**: `if-else` statements ka shorthand hai.






