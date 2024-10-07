# Narrowing in TypeScript
TypeScript mein "narrowing" ka concept yeh hota hai ke agar aik variable multiple types ko hold kar sakta ho (jaise `string | number`), to aapko us variable ke type ko specific code block mein "narrow" karna hota hai takay aap uske methods ko safely access kar saken.

### Narrowing Example with `string` and `number`

Aapke example mein `a` ko `string | number` type diya gaya hai:

```typescript
let a: string | number;

a = 'hello';
console.log('a', a.toUpperCase());

a = 123;
console.log('a', a.toFixed(2));
```

### Problem

Jab aap yeh likhtay hain:

```typescript
console.log('a', a.toUpperCase());
```

Ya phir:

```typescript
console.log('a', a.toFixed(2));
```

To TypeScript samajhta hai ke `a` ka type abhi `string` ya `number` dono ho sakta hai. Is liye aapko pehlay type ko "narrow" karna paray ga, yani TypeScript ko batana paray ga ke is specific line pe `a` ka type kya hai.

### Solution (Type Narrowing)

TypeScript mein hum `typeof` operator use kartay hain type check karne ke liye, takay specific type ka method call kar saken.

```typescript
let a: string | number;

a = 'hello';

if (typeof a === 'string') {
    console.log('a', a.toUpperCase()); // Yeh ab sahi se chalega kyun ke TypeScript ko pata hai ke a string hai
}

a = 123;

if (typeof a === 'number') {
    console.log('a', a.toFixed(2)); // Yeh ab sahi se chalega kyun ke TypeScript ko pata hai ke a number hai
}
```

### Explanation:
- Jab aap `typeof a === 'string'` check kartay hain, to TypeScript samajh jata hai ke `a` is block ke andar string hai, aur aap safely `toUpperCase()` method call kar saktay hain.
- Waisa hi `typeof a === 'number'` ke sath hota hai, takay aap number specific method `toFixed()` ko use kar sako.

Is tara aap TypeScript ko "narrow" karte hain ke kis block mein kis type ka method use karna hai.

