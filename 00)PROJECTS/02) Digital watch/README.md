# Digital Watch using Html/CSS/TypeScript
## Explanation

### **1. HTML Structure (index.html)**

```html

    <title>Digital Watch</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="digitalclock">
        <div class="day">
            <span id="day">Wednesday</span>
        </div>
        <div class="time">
            <div class="leftside">
                <span id="hours">00</span>
            </div>
            <div class="rightside">
                <div class="righttop">
                    <span id="dots">:</span>
                    <span id="minutes">00</span>
                </div>
                <div class="rightbottom">
                    <span id="seconds">00</span>
                    <span id="ampm">PM</span>
                </div>
            </div>
        </div>
        <div class="date">
            <span id="date">October 9, 2024</span>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>

```

#### **HTML Ki Tafseel:**


3. **`<head>`**: Is section mein hum metadata rakhte hain jaise charset, title, aur CSS ka link.
   
    - **`<title>Digital Watch</title>`**: Browser tab mein dikhne wala title set karta hai.
    - **`<link rel="stylesheet" href="styles.css">`**: Yeh external CSS file ko link karta hai jo styling ke liye hai.
4. **`<body>`**: Yeh main content area hai jahan hum apni digital clock banate hain.
5. **`<div class="digitalclock">`**: Yeh main container hai jo digital clock ko hold karta hai.
    - **`<div class="day">`**: Din (weekday) ko display karta hai.
        - **`<span id="day">Wednesday</span>`**: Default din ka naam, JavaScript se update hoga.
    - **`<div class="time">`**: Time (hours, minutes, seconds) ko display karta hai.
        - **`<div class="leftside">`**: Hours ko display karta hai.
            - **`<span id="hours">00</span>`**: Default hours, JavaScript se update hoga.
        - **`<div class="rightside">`**: Minutes aur seconds ko display karta hai.
            - **`<div class="righttop">`**: Minutes ko display karta hai.
                - **`<span id="dots">:</span>`**: Colon separator.
                - **`<span id="minutes">00</span>`**: Default minutes, JavaScript se update hoga.
            - **`<div class="rightbottom">`**: Seconds aur AM/PM ko display karta hai.
                - **`<span id="seconds">00</span>`**: Default seconds, JavaScript se update hoga.
                - **`<span id="ampm">PM</span>`**: AM ya PM indicator.
    - **`<div class="date">`**: Current date ko display karta hai.
        - **`<span id="date">October 9, 2024</span>`**: Default date, JavaScript se update hoga.
6. **`<script src="script.js"></script>`**: External JavaScript file ko link karta hai jo clock functionality provide karega.

### **2. CSS Styling (styles.css)**

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
}

body{
    min-height: 100vh;
    background-color: burlywood;
    display: flex;
    align-items: center;
    justify-content: center;
}

.digitalclock{
    padding: 20px 40px;
    width: 425px;
    background-color: rgb(22, 22, 22);
    color: #f7f4f4;
    border-radius: 20px;
    box-shadow: 0 0 50px rgba(37, 9, 1, 0.9);
}

.day, .date {
    text-align: center;
    margin: 20px 0;
    font-weight: 600;
    color: yellow;
}

.time, .leftside, .rightside {
    display: flex;
    align-items: center;
    justify-content: center;
}

.rightside{
    flex-direction: column;
}

#hours {
    font-size: -webkit-xxx-large;
    font-weight: 700;
}

#dots{
    font-size: xx-large;
    font-weight: 700;
    margin: 0 5px;
}

#minutes{
    font-size: xx-large;
}

#seconds{
    font-size: larger;
    font-weight: 600;
}

#ampm{
    font-size: larger;
    font-weight: 600;
    color: yellow;
}

.rightbottom{
    margin-left: 48px;
    transform: translateY(-7px);
}
```

#### **CSS Ki Tafseel:**

1. **Global Styles (`*` selector):**
    - **`margin: 0; padding: 0;`**: Sabhi elements ke default margin aur padding ko remove karta hai taake layout sahi se set ho.
    - **`box-sizing: border-box;`**: Element ki width aur height mein padding aur border ko include karta hai.
    - **`font-family: Poppins, sans-serif;`**: Sabhi text elements ke liye Poppins font set karta hai. Agar Poppins available nahi hai to sans-serif use hoga.

2. **Body Styling:**
    - **`min-height: 100vh;`**: Body ki minimum height viewport ki height jitni rakhta hai.
    - **`background-color: burlywood;`**: Page ka background color set karta hai.
    - **`display: flex; align-items: center; justify-content: center;`**: Flexbox use karke digital clock ko center mein horizontally aur vertically align karta hai.

3. **Digital Clock Container (`.digitalclock`):**
    - **`padding: 20px 40px;`**: Clock container ke andar padding add karta hai.
    - **`width: 425px;`**: Clock ki width set karta hai.
    - **`background-color: rgb(22, 22, 22);`**: Dark background color set karta hai.
    - **`color: #f7f4f4;`**: Text color set karta hai.
    - **`border-radius: 20px;`**: Corners ko round karta hai.
    - **`box-shadow: 0 0 50px rgba(37, 9, 1, 0.9);`**: Shadow effect add karta hai taake clock 3D lage.

4. **Day and Date Styling (`.day, .date`):**
    - **`text-align: center;`**: Text ko center align karta hai.
    - **`margin: 20px 0;`**: Top aur bottom margin set karta hai.
    - **`font-weight: 600;`**: Text ko bold karta hai.
    - **`color: yellow;`**: Text color yellow set karta hai.

5. **Time Section Styling (`.time, .leftside, .rightside`):**
    - **`display: flex; align-items: center; justify-content: center;`**: Flexbox use karke time elements ko center align karta hai.
    - **`.rightside` mein `flex-direction: column;`**: Right side ko column direction mein set karta hai taake minutes aur seconds vertically stack ho.

6. **Individual Time Elements:**
    - **`#hours`**: Bahut bada font size aur bold weight deta hai.
    - **`#dots`**: Colon separator ko bada font size aur bold banaata hai, margins set karta hai.
    - **`#minutes`**: Bada font size deta hai.
    - **`#seconds` aur `#ampm`**: Thoda bada font size aur bold weight deta hai, `#ampm` ka color yellow set karta hai.
    - **`.rightbottom`**: Seconds aur AM/PM ko thoda adjust karta hai position mein.

### **3. TypeScript Functionality (script.js)**

```typescript
function clock() {
    // Din aur Mahine ke naam
    let Days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let Months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // HTML elements ko select karna
    let hours: HTMLElement = document.getElementById("hours")!;
    let minutes: HTMLElement = document.getElementById("minutes")!;
    let seconds: HTMLElement = document.getElementById("seconds")!;
    let period: HTMLElement = document.getElementById("ampm")!;
    let day: HTMLElement = document.getElementById("day")!;
    let date: HTMLElement = document.getElementById("date")!;
    
    // Current date aur time le rahe hain
    let time = new Date();
    let hrs: number = time.getHours();
    let min: number = time.getMinutes();
    let sec: number = time.getSeconds();
    let dayIndex: number = time.getDay();
    let dates: number = time.getDate();
    let months: number = time.getMonth();
    let years: number = time.getFullYear();
    
    // Din aur date ko set karna
    day.innerHTML = Days[dayIndex];
    date.innerHTML = Months[months] + " " + dates + ", " + years;
    
    // 24 ghante format ko 12 ghante format mein convert karna
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs === 0) {
        hrs = 12;
    }
    
    // AM ya PM decide karna
    let ampm = time.getHours() >= 12 ? "PM" : "AM";
    
    // Single digit hours, minutes, seconds ko double digit banana
    hrs = hrs < 10 ? "0" + hrs : hrs.toString();
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    
    // HTML elements ko update karna
    hours.innerHTML = hrs;
    minutes.innerHTML = min.toString();
    seconds.innerHTML = sec.toString();
    period.innerHTML = ampm;
}

// Har second clock function ko call karna
setInterval(clock, 1000);

// Clock ko initial call karna taake page load hote hi time dikhai de
clock();
```

#### **TypeScript Ki Tafseel:**

1. **Function Definition:**
    - **`function clock() { ... }`**: Yeh function digital clock ko update karta hai har second.

2. **Din aur Mahine ke Naam:**
    - **`let Days: string[] = [...]`**: Ek array jo dinon ke naam store karti hai, Sunday se Saturday tak.
    - **`let Months: string[] = [...]`**: Ek array jo mahinon ke naam store karti hai, January se December tak.

3. **HTML Elements ko Select Karna:**
    - **`document.getElementById("hours")!`**: HTML mein `id` ke through elements ko select karta hai. **`!`** ka matlab hai ke hum sure hain ke yeh element exist karega.
    - Is tarah hum hours, minutes, seconds, AM/PM, day, aur date elements ko select kar rahe hain taake hum unhe JavaScript se update kar saken.

4. **Current Date aur Time:**
    - **`let time = new Date();`**: JavaScript ka `Date` object current date aur time provide karta hai.
    - **`time.getHours()`**, **`time.getMinutes()`**, **`time.getSeconds()`**: Current hours, minutes, seconds nikalte hain.
    - **`time.getDay()`**: Current din ka index (0-6) nikalta hai, jahan 0 Sunday hai.
    - **`time.getDate()`**, **`time.getMonth()`**, **`time.getFullYear()`**: Current date, month index (0-11), aur year nikalte hain.

5. **Din aur Date ko Set Karna:**
    - **`day.innerHTML = Days[dayIndex];`**: Din ka naam array se le kar HTML mein set karta hai.
    - **`date.innerHTML = Months[months] + " " + dates + ", " + years;`**: Mahine ka naam, date, aur year ko combine karke HTML mein set karta hai.

6. **24 Ghante Format ko 12 Ghante Format Mein Convert Karna:**
    - **`if (hrs > 12) { hrs = hrs - 12; }`**: Agar hours 12 se zyada hain, to 12 ghanta minus kar deta hai.
    - **`if (hrs === 0) { hrs = 12; }`**: Agar hours 0 hain (midnight), to 12 set kar deta hai.

7. **AM ya PM Decide Karna:**
    - **`let ampm = time.getHours() >= 12 ? "PM" : "AM";`**: Ternary operator use karke decide karta hai ke AM hai ya PM based on 24 ghante format.

8. **Single Digit ko Double Digit Banana:**
    - **`hrs = hrs < 10 ? "0" + hrs : hrs.toString();`**: Agar hours single digit hain (0-9), to aage 0 laga deta hai.
    - **`min = min < 10 ? "0" + min : min;`**: Minutes ke liye bhi same logic.
    - **`sec = sec < 10 ? "0" + sec : sec;`**: Seconds ke liye bhi same logic.

9. **HTML Elements ko Update Karna:**
    - **`hours.innerHTML = hrs;`**, **`minutes.innerHTML = min.toString();`**, **`seconds.innerHTML = sec.toString();`**, **`period.innerHTML = ampm;`**: Updated values ko respective HTML elements mein set karta hai.

10. **Clock Function ko Interval Pe Call Karna:**
    - **`setInterval(clock, 1000);`**: Har 1000 milliseconds (1 second) baad `clock` function ko call karta hai taake time real-time mein update hota rahe.
    - **`clock();`**: Page load hote hi clock ko initial call deta hai taake bina 1 second delay ke time dikhai de.

### **Key Points aur Functions Explained:**

1. **`document.getElementById`**:
    - Yeh JavaScript ka method hai jo HTML document mein specified `id` wale element ko select karta hai.
    - Example: **`document.getElementById("hours")`** se hum hours ka element select kar rahe hain taake usme time update kar saken.

2. **`new Date()`**:
    - Yeh JavaScript ka constructor hai jo current date aur time ka object create karta hai.
    - Is se hum current hours, minutes, seconds, din, mahina, aur saal le sakte hain.

3. **Ternary Operator (`? :`)**:
    - Yeh ek shorthand conditional statement hai.
    - Example: **`let ampm = time.getHours() >= 12 ? "PM" : "AM";`**
        - Agar hours 12 ya usse zyada hain, to `ampm` ko "PM" set karo, warna "AM".

4. **`setInterval`**:
    - Yeh JavaScript ka function hai jo specified time interval ke baad ek function ko baar baar call karta hai.
    - **`setInterval(clock, 1000);`** se hum `clock` function ko har second call kar rahe hain taake time update hota rahe.

5. **String Concatenation**:
    - **`Months[months] + " " + dates + ", " + years`** se hum date ko readable format mein convert kar rahe hain, jaise "October 9, 2024".

6. **`innerHTML`**:
    - Yeh property use hoti hai HTML elements ke content ko set ya get karne ke liye.
    - Example: **`hours.innerHTML = hrs;`** se hum hours element mein updated hours set kar rahe hain.
