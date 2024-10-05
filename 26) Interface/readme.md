

# 1. **Interface in TypeScript**
   - Interface ek tarah ka contract hota hai jo define karta hai kis tarah ka object ya class ka structure hoga. Isme hum define kar sakte hain kaunse properties aur unki types kisi object ya class me hone chahiye.
   - **Fayda**: Interface use karne ka fayda ye hota hai k hum apne code ko strict aur predictable bana sakte hain. Interface ke zariye TypeScript compiler humari ghaltiyan jaldi pakar leta hai, taake hum sahi type ke data ke saath kaam karain.

#### 2. **Code ka Breakdown:**

```typescript
interface employee {
    name: string,
    age: number,
    address: string,
    salary: number
};
```
   - Yahan humne `employee` naam ka ek interface banaya hai jo 4 properties ko define karta hai:
     - `name`: ye string type ka hoga.
     - `age`: ye number type ka hoga.
     - `address`: ye bhi string type ka hoga.
     - `salary`: ye number type ka hoga.
   - Ab jab hum koi employee ka object banayenge, to hume inhi properties ko follow karna hoga, warna error milegi.

```typescript
let employee1:employee = {
    name: "shaheer",
    age: 21,
    address: "lahore",
    salary: 100000
};
```
   - `employee1` naam ka ek object banaya gaya hai jo `employee` interface ko follow karta hai.
   - Har property ko jo interface me define ki gayi thi, use sahi type ke data ke sath initialize kiya gaya hai.
   - Agar hum name ko number ya salary ko string rakhtay, to error aa jati.

```typescript
let employee2:employee = {
    name: "waseem",
    age: 22,
    address: "karachi",
    salary: 1200000
};
```
   - Isi tarah `employee2` naam ka doosra object banaya gaya hai jo `employee` interface ko follow karta hai.
   - Yahan bhi sari properties ko define kiya gaya hai, jahan name, age, address aur salary ko sahi data type ke sath initialize kiya gaya.

```typescript
console.log('===========================');
console.log("---------employee1---------");
console.log('===========================');
console.log(employee1);
console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.address);
console.log(employee1.salary);
```
   - Yahan `employee1` object ki properties ko display kiya ja raha hai.
   - Pehle full object print ho raha hai, uske baad alag alag properties ko print kiya ja raha hai, jaise `name`, `age`, `address` aur `salary`.

```typescript
console.log('===========================');
console.log("---------employee2---------");
console.log('===========================');
console.log(employee2);
console.log(employee2.name);
console.log(employee2.age);
console.log(employee2.address);
console.log(employee2.salary);
```
   - Yahi same process `employee2` ke liye bhi repeat ho raha hai, jisme hum properties ko alag alag dekhte hain.

#### **Conclusion:**
   - Hum interfaces is liye use karte hain taake humara code structured aur predictable ho. Agar kisi object me galti se wrong type ka data aaye, to compiler error de dega aur hum asani se apne code ko debug kar sakeinge. 
