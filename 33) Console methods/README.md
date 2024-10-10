**TypeScript (aur JavaScript) me `console` object ka use kar ke hum different tarikon se output de sakte hain. Yahan kuch common methods aur unke use ko briefly explain kiya gaya hai:**

1. **Basic `console.log()`**:
   - Ye sab se zyada use hone wala method hai. Iska use kisi bhi value ko console me dikhane ke liye hota hai.
   
   **Example**:
   ```typescript
   let name = "Shaheer";
   console.log(name); // Output: Shaheer
   ```

2. **String Concatenation (Do values ko jorna `+`)**:
   - Hum `+` operator ka use kar ke strings ko jor kar console me output de sakte hain.
   
   **Example**:
   ```typescript
   let firstName = "Shaheer";
   let lastName = "Ahmad";
   console.log("Name: " + firstName + " " + lastName); // Output: Name: Shaheer Ahmad
   ```

3. **Template Literals (`` ` ` `` backticks ka use karke)**:
   - Ye tareeqa zyada convenient hai jab aapko multiple variables ko ek string me include karna ho. Hum `${}` ka use karte hain values ko directly embed karne ke liye.
   
   **Example**:
   ```typescript
   let age = 25;
   console.log(`My age is ${age}`); // Output: My age is 25
   ```

4. **Comma Separation (`console.log` me comma se alag karna)**:
   - Aap multiple values ko comma se alag kar ke bhi print kar sakte hain. Har value ko space ke saath dikhaya jata hai.
   
   **Example**:
   ```typescript
   let city = "Lahore";
   let country = "Pakistan";
   console.log("City:", city, "Country:", country); // Output: City: Lahore Country: Pakistan
   ```

5. **Console with Object Formatting**:
   - Jab aap kisi object ko dikhana chahte hain to `${}` ka use kar sakte hain, ya phir object ko direct pass kar sakte hain `console.log` me.
   
   **Example**:
   ```typescript
   let person = { firstName: "Shaheer", lastName: "Ahmad" };
   console.log(`Person: ${person.firstName} ${person.lastName}`); // Output: Person: Shaheer Ahmad
   console.log(person); // Output: { firstName: "Shaheer", lastName: "Ahmad" }
   ```

In methods ka use karke aap different tarikon se console me output ko handle kar sakte hain aur easily debug kar sakte hain.