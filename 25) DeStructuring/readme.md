# Destructuring in TypeScript
### Array Destructuring :

- **Array Destructuring** ek short syntax hai jo hume arrays ke elements ko easily alag variables me extract karne ka tareeqa deta hai.
  
#### Code ka Breakdown:

```typescript
let array = ["shaheer", 21, 5.10];
```
- Yahan ek `array` banaya gaya hai jisme 3 elements hain:
  - "shaheer" (string)
  - 21 (number)
  - 5.10 (number)
  
```typescript
let [name1, age, height] = array;
```
- Yahan hum **array destructuring** ka use kar rahe hain.
- `array` ke pehle element ko `name1`, doosre ko `age`, aur teesre ko `height` variable me directly assign kar diya gaya hai.
  
```typescript
console.log(name1);  // shaheer
console.log(age);    // 21
console.log(height); // 5.10
```
- Ab jab hum in variables ko `console.log()` karte hain, to ye respective values ko print karenge:
  - `name1` me "shaheer" aayega.
  - `age` me 21 aayega.
  - `height` me 5.10 aayega.

#### **Conclusion:**
- Array destructuring ka fayda ye hai k hum array ke values ko quickly variables me assign kar sakte hain bina manual index likhne ke.



### Object Destructuring:

- **Object Destructuring** ek shortcut hai jisme hum object ki properties ko directly alag variables me assign kar sakte hain bina manually access karne ke.

#### Code ka Breakdown:

```typescript
let object = {
    name2: "shaheer",
    age1: 21,
    height1: 5.10,
    hobbies: ["cricket", "music", "coding"]
};
```
- Yahan ek `object` banaya gaya hai jo kuch properties contain karta hai:
  - `name2`: "shaheer"
  - `age1`: 21
  - `height1`: 5.10
  - `hobbies`: ["cricket", "music", "coding"]

```typescript
let { name2, age1, height1, hobbies } = object;
```
- **Object Destructuring** ka use kar ke hum object ki properties ko directly variables me assign kar rahe hain.
  - `name2` ko object se nikal kar `name2` variable me store kiya.
  - `age1` ko `age1` variable me, `height1` ko `height1` me, aur `hobbies` ko `hobbies` variable me store kiya.

```typescript
console.log("name : ", name2);  // shaheer
console.log("age : ", age1);    // 21
console.log('height : ', height1.toFixed(2)); // 5.10
console.log('hobbies : ', hobbies);  // [ 'cricket', 'music', 'coding' ]
```
- `console.log()` ke zariye hum in variables ki values ko print kar rahe hain:
  - `name2`: "shaheer"
  - `age1`: 21
  - `height1`: `toFixed(2)` method ke saath 2 decimal points tak round off ho kar print hoti hai (5.10).
  - `hobbies`: array ke form me print hoti hai.

```typescript
console.log('first hobby : ', hobbies[0]); // cricket
console.log('last hobby : ', hobbies[hobbies.length - 1]); // coding
```
- `hobbies` array me se pehla aur aakhri hobby print kiya ja raha hai:
  - Pehla element `hobbies[0]`: "cricket"
  - Last element `hobbies[hobbies.length - 1]`: "coding"

#### **Conclusion:**
- Object destructuring se hum asaani se object ki properties ko extract kar sakte hain bina bar-bar object ko reference kiye.