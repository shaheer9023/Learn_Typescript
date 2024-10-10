# Literal types in typescript

**Union Types** aur **Literal Types** dono TypeScript me types define karne ke liye use hote hain, lekin inka use aur behavior thoda different hota hai. Yahan in dono ka brief explanation diya gaya hai:

### 1. **Union Types**:
Union types ka matlab hota hai ke ek variable ek se zyada types ko accept kar sakta hai. Yani agar aapko aik variable ko multiple types assign karni hain, to aap union types ka use karte hain.

**Example**:
```typescript
let value: string | number;
value = "Hello";  // Ye sahi hai
value = 123;      // Ye bhi sahi hai
```
**Explanation**:
Yahan `value` ko ya to `string` type ki value mil sakti hai ya `number` type ki. Dono acceptable hain.

### 2. **Literal Types**:
Literal types me aap specific values ko restrict karte hain, yani variable sirf kuch fixed values ko hi accept kar sakta hai. Ye specific values ki baat karta hai, not types ki.

**Example**:
```typescript
let direction: "left" | "right";
direction = "left";   // Ye sahi hai
direction = "right";  // Ye bhi sahi hai
direction = "up";     // Ye ghalat hai, kyunki sirf "left" ya "right" allowed hain
```
**Explanation**:
Yahan `direction` sirf "left" ya "right" values ko accept kar sakta hai. Iska matlab hai ke variable sirf literal values ko hi assign kar sakta hai.

### **Summary**:
- **Union Types**: Variable ko multiple types assign karne ke liye.
  - Example: `string | number`
  
- **Literal Types**: Variable ko specific values restrict karne ke liye.
  - Example: `"left" | "right"`

Dono ka apna use case hai aur situation ke mutabiq inka use hota hai.