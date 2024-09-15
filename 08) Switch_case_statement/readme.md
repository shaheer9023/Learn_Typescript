# Switch_Case in TypeScript:

## Syntax:
```typescript
switch (expression) {
    case value1:  
        statement1;
        break;
    case value2:
        statement2;
        break;
    default:
        statement3;
}
```
 

**Example 1:**

```typescript
let day: number = 4; 
```
Yahan `day` ki value `4` hai. Switch case day ko evaluate kar raha hai.

```typescript
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}
```
- Jab `day` 4 hota hai, case 4 match ho jata hai aur "Thursday" print hota hai.
- Agar koi match na ho to `default` case run hota hai jo "Invalid day" print karta hai.

**Example 2:**
```typescript
let grade: string = "A"; 
```
Yahan `grade` ki value `"A"` hai, iski basis pe switch case execute hota hai.

```typescript
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Failed");
        break;
    default:
        console.log("Invalid grade");
}
```
- Jab `grade` `"A"` hota hai, "Excellent" print hota hai.
- Agar grade match nahi hota to `default` case "Invalid grade" print karta hai.

**Example 3:**
```typescript
let marks: number = 75; 
```
Is example me switch case `true` expression ke sath use hota hai jo multiple conditions ko check karta hai marks ki range ke mutabiq.

```typescript
switch (true) {
    case marks > 90 && marks <= 100:
        console.log("Grade A");
        break;
    case marks > 80 && marks <= 90: 
        console.log("Grade B");
        break;
    case marks > 70 && marks <= 80:
        console.log("Grade C");
        break;
    case marks > 60 && marks <= 70:
        console.log("Grade D");
        break;
    case marks > 50 && marks <= 60:
        console.log("Grade E");
        break;
    case marks > 40 && marks <= 50:
        console.log("Grade F");
        break;
    default:
        console.log("Marks are not in range");
}
```
- Yahan marks `75` hain, to third case match karta hai aur "Grade C" print hota hai.
- Agar marks range me nahi hote, to `default` case "Marks are not in range" print karta.




