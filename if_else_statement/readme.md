# TypeScript `if-else` Statement Explanation

Yahaan pe `if-else` statements ka istamaal dikhaya gaya hai. Is syntax ka use hum conditional logic ko execute karne ke liye karte hain. Matlub agar koi condition true ho, to `if` block execute hoga; aur agar false ho, to `else` block chalega.

---

**Step-by-step  Explanation:**

1. **True condition example:**
   ```javascript
   console.log('true condition');
   if (true) {
       console.log('welcome home'); // Agar condition true ho, to if block execute hoga
   } else {
       console.log('Bye!'); // Agar condition false ho, to else block execute hoga
   }
   ```
   - Yahaan, condition true hai, is liye `if` block chalega aur 'welcome home' print hoga.

2. **False condition example:**
   ```javascript
   console.log('false condition');
   if (false) {
       console.log('welcome home'); // Agar condition true ho, to if block chalega
   } else {
       console.log('Bye!'); // Agar condition false ho, to else block chalega
   }
   ```
   - Is example mein, condition false hai, is liye `else` block chalega aur 'Bye!' print hoga.

3. **Case sensitivity example:**
   ```typescript
   let Username: string = 'Shaheer'; // Yahan Shaheer ka pehla letter capital hai
   if (Username === 'Shaheer') {
       console.log('Hi Shaheer');
   } else {
       console.log('Bye!');
   }
   ```
   - Agar `Username` 'Shaheer' ke equal ho, to 'Hi Shaheer' print hoga. Yeh example case sensitive hai, yaani capital aur small letters ka farq count hota hai.

4. **Case-insensitive example:**
   ```typescript
   if (Username == 'shaheer') { // Yahan 'shaheer' small letters mein hai
       console.log('Hi Shaheer');
   } else {
       console.log('Bye!'); // Kyun ke case sensitive hai, yeh match nahi karega aur 'Bye!' print hoga
   }
   ```

5. **Login example (Multiple conditions):**
   ```typescript
   let password: number = 1234;
   if (Username === 'Shaheer' && password === 1234) {
       console.log('Login Successful');
   } else {
       console.log('Login Failed');
   }
   ```
   - Yahan `if` block tabhi chalega jab dono conditions true hon: `Username` 'Shaheer' ho aur `password` 1234 ho.

6. **Failed login example:**
   ```typescript
   if (Username === 'Shaheer' && password === 12345) {
       console.log('Login Successful');
   } else {
       console.log('Login Failed'); // Password galat hai is liye 'Login Failed' print hoga
   }
   



