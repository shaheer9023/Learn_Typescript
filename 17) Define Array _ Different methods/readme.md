#  Arrays  with different methods in typescript

### 1. By Normal Method
Is method mein hum directly array ke andar values likhte hain, aur yeh array ko seedha initialize karta hai.

```typescript
let arr1: number[] = [1, 2, 3, 4, 5];
console.log('arr1', arr1);
```

**Explanation**:
- `let arr1: number[]` ka matlab hai ke yeh ek array hai jo sirf numbers ko store karega.
- `[1, 2, 3, 4, 5]` se hum is array mein numbers add kar rahe hain.

### 2. By Constructor
Is method mein `Array` constructor ka use karke ek naya array banaya jaata hai aur usmein values di jaati hain.

```typescript
let arr2: number[] = new Array(4, 5, 6, 7, 8);
console.log('arr2', arr2);
```

**Explanation**:
- `new Array(4, 5, 6, 7, 8)` ek constructor method hai jo ek naya array create karta hai aur usmein yeh numbers daalta hai.
  
### 3. By Array Method
Is method mein `Array.of` ka use kiya jaata hai taake ek array create kiya jaaye.

```typescript
let arr3: string[] = Array.of("shaheer", "khan", "ahmad");
console.log('arr3', arr3);
```

**Explanation**:
- `Array.of("shaheer", "khan", "ahmad")` ek method hai jo values ko array mein convert karta hai.
- Yeh method har type ki values ko handle kar sakta hai. Yahaan strings hain.

**Output**:
1. Pehla array numbers ka hai, jo normal method se bana.
2. Dusra array bhi numbers ka hai, lekin constructor method se bana.
3. Teesra array strings ka hai, jo `Array.of` method se create hua.