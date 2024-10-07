#  Limitation of type and interface in typescript
TypeScript me `type` aur `interface` dono ka use custom types bananay k liye kiya jata hai, lekin dono me kuch differences aur limitations hain jo samajhna zaroori hai.

### Differences:

1. **Merging**:
   - `interface` automatically merge ho sakti hai agar multiple times define kiya jaye, lekin `type` ke saath aisa nahi hota.  
   - Merging ka matlab hai agar aap ek hi naam ka `interface` do ya zyada dafa likh rahe ho, to TypeScript inko merge kar ke ek hi interface banayega.
   - `type` ko ek hi naam se redefine nahi kar sakte.

   **Example:**
   ```typescript
   // Interface Merging Example
   interface Person {
     name: string;
   }

   interface Person {
     age: number;
   }

   const user: Person = {
     name: "Shaheer",
     age: 24,
   };
   ```

   **Type Merging Example (Ghalat Code):**
   ```typescript
   type Person = {
     name: string;
   };

   type Person = {
     age: number;
   };  // Error: Duplicate identifier 'Person'.
   ```

2. **Union and Intersection Types**:
   - `type` ka use kar ke aap union aur intersection types bana sakte ho, jab ke `interface` ke saath ye possible nahi hai.
   - Union ka matlab hai ke type me ek ya zyada types ho sakte hain. Intersection ka matlab hai ke type multiple types ka combination ho.

   **Example:**
   ```typescript
   // Union Type Example with Type
   type MyUnion = string | number;

   // Intersection Type Example with Type
   type Person = { name: string };
   type Employee = { salary: number };

   type Worker = Person & Employee;

   const worker: Worker = {
     name: "Shaheer",
     salary: 50000,
   };
   ```

   `interface` me aisa karna possible nahi hota.

3. **Primitive Types**:
   - `type` ka use primitive types jaise `string`, `number`, etc. ke aliases bananay k liye bhi hota hai, lekin `interface` se aap sirf object-like structure define kar sakte ho.
   
   **Example:**
   ```typescript
   type Name = string; // Valid
   // Interface cannot be used for primitive types
   ```

4. **Extending**:
   - `interface` aur `type` dono ko extend kar sakte hain, lekin `interface` ko extend karna zyada flexible hota hai. `type` ke through multiple types ko extend nahi kar sakte.
   
   **Example (Interface Extending):**
   ```typescript
   interface Person {
     name: string;
   }

   interface Employee extends Person {
     salary: number;
   }

   const emp: Employee = {
     name: "Shaheer",
     salary: 50000,
   };
   ```

   **Example (Type Extending):**
   ```typescript
   type Person = {
     name: string;
   };

   type Employee = Person & {
     salary: number;
   };

   const emp: Employee = {
     name: "Shaheer",
     salary: 50000,
   };
   ```

### Limitations:

1. **Interface me Union Types nahi bana sakte**, jab ke `type` me aap multiple types ko combine kar sakte ho, jaise pehle dikhaya gaya hai.

2. **Interface merging automatically ho jati hai**, lekin `type` ko manually update karna padta hai, iska matlab agar do log ek hi naam ka interface likhte hain, wo merge ho jayega.

3. **Type ke andar aap kisi bhi type ko alias de sakte ho** (primitive, union, intersection, etc.), lekin interface ko sirf object shapes define karne ke liye hi use karte hain.

### Conclusion:

Agar aapko union aur intersection types chahiye, to `type` use karo. Agar aapko object structure ko extend ya merge karna hai, to `interface` zyada acha hota hai. Dono ke use-cases hain, lekin project ki requirements ke hisaab se inka selection karna chahiye.

---

**Simple Examples**:

1. **Type Example**:
   ```typescript
   type StringOrNumber = string | number;

   const value: StringOrNumber = 5; // number bhi ho sakta hai ya string bhi
   ```

2. **Interface Example**:
   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   const user: Person = {
     name: "Shaheer",
     age: 24,
   };
   ```
