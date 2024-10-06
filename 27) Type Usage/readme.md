#  Custom Types in TypeScript 

#### 1. **Types Define Karna**
Hum TypeScript mein `type` keyword ka use karke custom types bana sakte hain, jese string, number, ya kisi object ke liye specific structure define karna. Yeh humein code ko zyada readable aur maintainable banane mein madad karta hai.

```typescript
type Name = string;
type age = number;
type id = number;
```
- `Name`: Humne `string` type ke liye ek custom type `Name` banaya.
- `age`: `number` type ke liye custom type banaya.
- `id`: `number` type ke liye bhi custom type define kiya.

#### 2. **Variables Define Karna Custom Types Se**
Jab hum custom types banate hain, to hum unko apne variables ko strongly type karne ke liye use kar sakte hain. Is se TypeScript humare code ko validate karta hai aur galtiyan pakar leta hai.

```typescript
let Name: Name = "Shaheer";
let age: age = 21;
let id: id = 313;
```
- `Name`: Custom type `Name` ka use karke ek `string` value assign ki, jo ke "Shaheer" hai.
- `age`: Custom type `age` ka use karke `21` assign kiya.
- `id`: Custom type `id` ka use karke `313` assign kiya.

#### 3. **Objects Ko Types Ke Sath Define Karna**
Hum objects ke liye bhi specific structure banate hain. Is example mein humne `Employee` type define ki, jo ek object ko represent karta hai.

```typescript
type Employee = {
    Name: Name,
    age: age,
    id: id
};
```
- `Employee` type define karta hai ke object ke andar `Name`, `age`, aur `id` properties honi chahiyein, jinka type respectively `string` aur `number` hoga.

#### 4. **Object Banane Ka Tareeqa**
Custom type `Employee` ka use karke hum object ko specific structure ke sath bana sakte hain:

```typescript
let employee1: Employee = {
    Name: "Shaheer",
    age: 21,
    id: 313
};
```
- `employee1` ek object hai jismein `Name`, `age`, aur `id` ki values assign ki gayi hain, jo ke `Employee` type ke mutabiq hain.

#### 5. **Console Mein Print Karna**
Hum object ya variables ko console mein print kar sakte hain:

```typescript
console.log('employee1: ', employee1);
```
Yeh line pura `employee1` object console pe dikhayegi.

#### 6. **Errors Handle Karna**
Agar hum object ya variable ko galat type ke sath define karein, to TypeScript compile time error dega:

```typescript
let employee2: Employee = {
    Name: "Anas",
    age: "21",  // Error! "age" must be a number
    id: "313"   // Error! "id" must be a number
};
```
Yahan `age` aur `id` ka type `string` hai jab ke unhein `number` hona chahiye. Iski wajah se yeh error dega.

#### 7. **Fayda**
- **Type Safety**: Yeh humein galat values assign karne se rokti hai.
- **Readability**: Code ko zyada understandable banati hai.
- **Error Detection**: Galtiyon ko jaldi pakadne mein madad karti hai.

Is tarah ka TypeScript ka feature humein code ko zyada reliable aur bug-free banane mein madad deta hai.