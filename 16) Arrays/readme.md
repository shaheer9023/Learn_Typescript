# Arrays in typescript

### Arrays Kya Hoti Hain?

Arrays aik aisa data structure hota hai jismein multiple values ko ek hi variable mein store kiya jata hai. Har value ko ek index assign hota hai, jo zero se start hota hai. Arrays ka istimaal tab hota hai jab aapko ek hi type ki values ko organized tarike se store karna ho aur asani se access karna ho.

### Kyu Use Karte Hain?

Hum arrays ka istimaal is liye karte hain kyun ke yeh multiple values ko ek jagah rakhti hain, jisse data ko manage aur access karna asaan hota hai. Har value ko ek specific index number diya jata hai jo zero se start hota hai.

## syntax
```typescript
let array:datatype=[collection of values];
```

#### 1. **Number Array Example**
```typescript
let a: number[] = [1, 2, 3];
console.log('|----------------------------------------|');
console.log('explanation of array a', a);
console.log('|----------------------------------------|');
console.log('length of array', a.length);
console.log('element at index 1', a[1]);
console.log('element at index 2', a[2]);
console.log('element at index 0', a[0]);
```

- **Explanation:**
  Yeh array `a` sirf numbers store karta hai. Indexing zero se shuru hoti hai, yani:
  - `1` ka index `0` hai,
  - `2` ka index `1` hai,
  - `3` ka index `2` hai.

- **Output:**
  ```
  |----------------------------------------|
  explanation of array a [1, 2, 3]
  |----------------------------------------|
  length of array 3
  element at index 1 2
  element at index 2 3
  element at index 0 1
  ```
  Output mein pehle array `a` print hota hai jo ke `[1, 2, 3]` hai. Phir array ki length print hoti hai jo `3` hai. Phir har index pe jo element hai wo print hota hai:
  - Index `1` pe `2`,
  - Index `2` pe `3`,
  - Index `0` pe `1`.

#### 2. **String Array Example**
```typescript
let b: string[] = ['a', 'b', 'c'];
console.log('|--------------------------------------|');
console.log('explanation of array b', b);
console.log('|--------------------------------------|');
console.log('length of array', b.length);
console.log('element at index 1', b[1]);
console.log('element at index 2', b[2]);
console.log('element at index 0', b[0]);
```

- **Explanation:**
  Yeh array `b` sirf strings store karta hai. Indexing kuch is tarah se hoti hai:
  - `'a'` ka index `0` hai,
  - `'b'` ka index `1` hai,
  - `'c'` ka index `2` hai.

- **Output:**
  ```
  |--------------------------------------|
  explanation of array b ['a', 'b', 'c']
  |--------------------------------------|
  length of array 3
  element at index 1 b
  element at index 2 c
  element at index 0 a
  ```
  Is output mein array `b` print hota hai jo ke `['a', 'b', 'c']` hai. Phir array ki length print hoti hai jo `3` hai. Phir har index pe jo element hai wo print hota hai:
  - Index `1` pe `'b'`,
  - Index `2` pe `'c'`,
  - Index `0` pe `'a'`.

#### 3. **Union Type Array Example**
```typescript
let c: (string | number)[] = [1, 'b', 3];
console.log('|--------------------------------------|');
console.log('explanation of array c', c);
console.log('|--------------------------------------|');
console.log('length of array', c.length);
console.log('element at index 1', c[1]);
console.log('element at index 2', c[2]);
console.log('element at index 0', c[0]);
```

- **Explanation:**
  Array `c` mein hum string aur number dono types ka data store kar sakte hain. Is example mein:
  - `1` ka index `0` hai,
  - `'b'` ka index `1` hai,
  - `3` ka index `2` hai.

- **Output:**
  ```
  |--------------------------------------|
  explanation of array c [1, 'b', 3]
  |--------------------------------------|
  length of array 3
  element at index 1 b
  element at index 2 3
  element at index 0 1
  ```
  Is output mein array `c` print hota hai jo ke `[1, 'b', 3]` hai. Phir array ki length print hoti hai jo `3` hai. Phir har index pe jo element hai wo print hota hai:
  - Index `1` pe `'b'`,
  - Index `2` pe `3`,
  - Index `0` pe `1`.
