

---

# Slice aur Splice Methods in TypeScript / JavaScript

## Slice Method

### Example 1:

```ts
let a: number[] = [1, 2, 3, 4, 5];
// let b = a.slice(start point, end point);
let b: number[] = a.slice(1, 3); // 2, 3
console.log('b', b);
```

1. **a.slice(1, 3)** ka matlab hai:
   - Start index `1` se shuru karo (yani `2` se).
   - Index `3` tak le jao, lekin index `3` ko include nahi karo.
   - Iska result hoga `[2, 3]`, jo `b` mein store hoga.

### Example 2:

```ts
let names: string[] = ["Shaheer", "Ali", "Ahmed", "Hassan", "Anas"];
console.log('complete names', names); // ['Shaheer', 'Ali', 'Ahmed', 'Hassan', 'Anas']

let selectedNames: string[] = names.slice(1, 3);
console.log(selectedNames); // ['Ali', 'Ahmed']
```

- **names.slice(1, 3)** ka matlab hai index `1` se shuru karna (`Ali`) aur `3` pe rukna (lekin `Hassan` ko include nahi karna).
- Result hoga: `['Ali', 'Ahmed']`.
- Original array `names` change nahi hoti.

---

## Splice Method

### Example 1:

```ts
let a: number[] = [1, 2, 3, 4, 5];
// let b = a.splice(start point, number of elements, elements to be added);
let b: number[] = a.splice(1, 3, 6, 7);
console.log('b', b); // [2, 3, 4]
console.log('original array', a); // [1, 6, 7, 5]
```

- **splice(1, 3, 6, 7)** ka matlab hai:
  - Index `1` se shuru karte hue `3` elements delete karo (`[2, 3, 4]`).
  - Unki jagah pe `6` aur `7` insert kar do.
  - `b` mein deleted elements store honge (`[2, 3, 4]`), aur array `a` ka updated version hoga `[1, 6, 7, 5]`.

### Example 2:

```ts
let names: string[] = ["Shaheer", "Ali", "Ahmed", "Hassan", "Anas"];
console.log('complete names', names); // ['Shaheer', 'Ali', 'Ahmed', 'Hassan', 'Anas']

let selectedNames: string[] = names.splice(1, 3, "Soban", "Muzammil", "Shoaib");
console.log('selected names', selectedNames); // ['Ali', 'Ahmed', 'Hassan']
console.log("original array after splice", names); // ['Shaheer', 'Soban', 'Muzammil', 'Shoaib', 'Anas']
```

- **names.splice(1, 3, "Soban", "Muzammil", "Shoaib")** ka matlab hai:
  - Index `1` se `3` elements delete karo (`['Ali', 'Ahmed', 'Hassan']`).
  - Unki jagah `Soban`, `Muzammil`, aur `Shoaib` add ho jate hain.
  - Updated array: `['Shaheer', 'Soban', 'Muzammil', 'Shoaib', 'Anas']`.

---

## Difference aur Kab Use Karein:

1. **Slice**:
   - **Kab use karein**: Jab tum original array ko change kiye baghair ek new array banana chaho.
   - **Example**: Jab tum array ke kuch elements ko copy karke use karna chahte ho, lekin original array ko unchanged rakhna ho.

2. **Splice**:
   - **Kab use karein**: Jab tum original array ko modify karna chahte ho, yani elements ko remove ya add karna chahte ho.
   - **Example**: Jab tum array ke beech mein se elements nikal kar unki jagah naye elements insert karna chaho.

---

