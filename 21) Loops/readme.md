# Loops in TypeScript

#### For Loop
1. **For Loop Syntax:**
   ```typescript
   for (let initialization; condition; updation) {
       // body
   }
   ```

2. **Example 1:**
   ```typescript
   for (let i = 0; i < 5; i++) {
       console.log(5); // It will print 5, 5 times
   }
   ```
   - **Step 1:** Initialization `i = 0`, yeh loop ko shuru kar raha hai.
   - **Step 2:** Condition `i < 5`, yeh loop tab tak chalega jab tak `i` ki value 5 se choti hai.
   - **Step 3:** `i++` se har iteration ke baad `i` ki value ko 1 se barhaya jata hai.
   - **Step 4:** `console.log(5)` – Har iteration me `5` print hota hai.

3. **Table of 5 with For Loop:**
   ```typescript
   console.log('============================');
   console.log('---------Table of 5---------');
   console.log('============================');
   
   for (let i = 1; i <= 10; i++) {
       console.log("5 * " + i + " = " + 5 * i);
   }
   ```
   - **Step 1:** For loop 1 se le kar 10 tak chalega.
   - **Step 2:** Har iteration me `5 * i` ka result print hoga, jahan `i` ka value 1 se 10 tak change hota rahega.

#### While Loop
4. **While Loop Syntax:**
   ```typescript
   let initialization;
   while (condition) {
       // body
       // updation
   }
   ```

5. **Example:**
   ```typescript
   let i = 0;
   while (i < 5) {
       console.log(5); // It will print 5, 5 times
       i++;
   }
   ```
   - **Step 1:** Initialization `let i = 0` ho rahi hai.
   - **Step 2:** Condition `i < 5`, yeh loop tab tak chalega jab tak `i` ki value 5 se choti hai.
   - **Step 3:** `i++` ke zariye har iteration ke baad `i` barhata hai.
   - **Step 4:** Har iteration me `5` print hota hai.

6. **Table of 2 with While Loop:**
   ```typescript
   console.log('============================');
   console.log('---------Table of 2---------');
   console.log('============================');
   
   let num = 0;
   while (num <= 10) {
       console.log("2 X " + num + " = " + 2 * num);
       num++;
   }
   ```
   - **Step 1:** Initialization `num = 0` ho rahi hai.
   - **Step 2:** Loop tab tak chalega jab tak `num <= 10`.
   - **Step 3:** Har iteration me `2 * num` ka result print hoga, aur `num++` ke zariye value barh rahi hai.

#### Do-While Loop
7. **Do-While Loop Syntax:**
   ```typescript
   do {
       // body
       // updation
   } while (condition);
   ```

8. **Example:**
   ```typescript
   let j = 0;
   do {
       console.log(5); // It will print 5, 5 times
       j++;
   } while (j < 5)
   ```
   - **Step 1:** Pehle loop ka body execute hoga, jisme `5` print hota hai.
   - **Step 2:** Phir condition check hoti hai `j < 5`. Agar condition true hai to loop dobara chalega.
   - **Step 3:** Har iteration ke baad `j++` ho raha hai.

9. **Table of 10 with Do-While Loop:**
   ```typescript
   console.log('============================');
   console.log('---------Table of 10---------');
   console.log('============================');
   
   let number = 0;
   do {
       console.log("10 X " + number + " = " + 10 * number);
       number++;
   } while (number <= 10)
   ```
   - **Step 1:** Pehle body execute hogi aur `10 * number` ka result print karegi.
   - **Step 2:** Phir condition check hogi `number <= 10`. Agar true hai to loop chalega.
   - **Step 3:** Har iteration me `number++` ke zariye value barh rahi hai.
