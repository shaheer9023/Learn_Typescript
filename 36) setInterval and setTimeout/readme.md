# Explore setInterval and setTimeout in Typescript

### `setTimeout` Explanation:
- **Console log `Hello`**:
   ```js
   console.log('Hello');
   ```
   - Yeh pehla statement turant "Hello" print karega.

- **1 second ka delay se print karwana**:
   ```js
   setTimeout(() => {
       console.log('Shaheer Ahmad');
   }, 1000);
   ```
   - Yahan `setTimeout` ka function use hua hai jo 1 second (1000 milliseconds) ke baad "Shaheer Ahmad" print karega.

- **5 seconds ka delay se aur message print karwana**:
   ```js
   setTimeout(() => {
       console.log('Son of Fiaz Ahmad');
   }, 5000);
   ```
   - Is code mein 5 seconds (5000 milliseconds) ke baad "Son of Fiaz Ahmad" print hoga.

### `setInterval` Explanation:
- **Console log `Hello`**:
   ```js
   console.log('Hello');
   ```
   - Pehla statement turant "Hello" print karega.

- **Naam 5 baar repeat karwana**:
   ```js
   let count=0;
   let namee=setInterval(() => {
       count++;
       console.log(count,". Shaheer Ahmad");
       if(count>=5){
           clearInterval(namee);
       }
   }, 1000);
   ```
   - Yahan pehle `count` ko 0 set kiya gaya hai.
   - `setInterval` har 1 second ke baad `"Shaheer Ahmad"` print karega aur count ko 1 se barhata jayega.
   - Jab count 5 ya us se zyada ho jayega, `clearInterval(namee)` run hoga, jo interval ko rok dega.