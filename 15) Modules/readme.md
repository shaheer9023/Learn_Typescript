# Import / Export in typescript

### 1. **`export.ts` file:**

Is file mein humne do functions define kiye hain aur unhein export kiya hai taa ke hum dusri files mein unko use kar sakein:

```typescript
// export.ts
export let hello = (): void => {
    console.log('hello world');
};

export let myname = (name: string): void => {
    console.log('hello ' + name);
};
```

---

### 2. **`import.ts` file:**

Is file mein hum `export.ts` se `hello` aur `myname` functions ko import karte hain aur phir unko call karte hain. Yeh file ka code kuch is tarah hoga:

```typescript
// import.ts
import { hello, myname } from "./export";

hello(); // console pe "hello world" print karega

myname("Shaheer"); // console pe "hello Shaheer" print karega
```

---

### 3. **`anothername.js` file:**

Is file mein humne sirf `myname` function ko import kiya hai aur isse use kar rahe hain. Yeh file ka code kuch is tarah hoga:

```javascript
// anothername.js
import { myname } from "./export";

myname("Shaheer Ahmad"); // console pe "hello Shaheer Ahmad" print karega
```

---

### **Yeh technique kyun use hoti hai?**

1. **Code Reusability**: Functions ko ek jagah banane ke baad unko baar baar alag alag files mein import kar ke use karna, is se code ka dobara istemal hota hai aur effort kam lagta hai.

2. **Modular Programming**: Code ko alag alag modules ya files mein todhne se usko samajhna aur manage karna asaan ho jata hai.

3. **Maintainability**: Sirf ek jagah pe change karne se sab files mein changes reflect ho jati hain jahan jahan wo function use ho raha hota hai.

Is tarah `import` aur `export` ka use karna code ko clean, organized, aur maintainable banata hai.