# **Synchronous vs Asynchronous Methods in TypeScript**

### Synchronous Method
 **synchronous method** wo hota hai jo aik sequence main run hota hai, yani pehla kaam khatam hota hai, tabhi doosra start hota hai. Is tarah program blocking hota hai, kyunki agla kaam pehle wale pe dependent hota hai.

**Example:**
```typescript
function syncFunction() {
  console.log("Kaam 1 shuru");
  console.log("Kaam 2 shuru");
  console.log("Kaam 3 shuru");
}

syncFunction();
```

**Explanation:**
1. Pehle "Kaam 1" print hota hai.
2. Phir "Kaam 2".
3. Phir "Kaam 3".

### Asynchronous Method
**Asynchronous method** ek saath multiple tasks perform kar sakta hai bina ek task complete hone ka wait kare. Yeh method *non-blocking* hota hai aur kabhi bhi future main run hota hai.

**Example:**
```typescript
function asyncFunction() {
  console.log("Kaam 1 shuru");

  setTimeout(() => {
    console.log("Kaam 2 shuru (Asynchronous)");
  }, 2000);

  console.log("Kaam 3 shuru");
}

asyncFunction();
```

**Explanation:**
1. Pehle "Kaam 1" print hota hai.
2. Phir "Kaam 3" print hota hai bina wait kiye.
3. "Kaam 2" 2 seconds ke baad print hota hai asynchronously.

In short:
- **Synchronous**: Ek sequence follow hota hai.
- **Asynchronous**: Task independently hotay hain, wait nahi hota.