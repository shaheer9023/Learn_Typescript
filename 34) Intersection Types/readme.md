# Intersection in typescript

### 1. Types define karna
```typescript
type persondetails = {
    name: string,
    age: number
};
type officialdetails = {
    email: string,
    phone: number
};
```
- **Roman Urdu**: Yahan humne do types banaye hain:
  - `persondetails` jo `name` aur `age` ka data hold karega.
  - `officialdetails` jo `email` aur `phone` ka data rakhega.

### 2. Intersection Type ka istemal
```typescript
let person: persondetails & officialdetails = {
    name: "Shaheer ahmad",
    age: 21,
    email: "shaheerahmad9023@gmail.com",
    phone: 3127511011
};
```
- **Roman Urdu**: Humne `person` naam ka ek object banaya hai jo dono types (`persondetails` aur `officialdetails`) ko combine karke sab properties ko use kar raha hai. Yeh object me `name`, `age`, `email` aur `phone` ki values set ki hain.

### 3. Console me poori details print karna
```typescript
console.log('===Complete Details===');
console.log(person);
```
- **Roman Urdu**: Yeh line `console` pe poora `person` object print karegi, yani `name`, `age`, `email`, aur `phone` sab kuch ek sath dikhaye ga.

### 4. Sirf `name` print karna
```typescript
console.log('===Name===');
console.log(person.name);
```
- **Roman Urdu**: Yeh sirf `name` property ko console pe print karegi, yani "Shaheer ahmad" dikhaye ga.

### 5. Sirf `age` print karna
```typescript
console.log('===Age===');
console.log(person.age);
```
- **Roman Urdu**: Yeh sirf `age` property ko console pe print karegi, yani `21` dikhaye ga.

### 6. Sirf `email` print karna
```typescript
console.log('===Email===');
console.log(person.email);
```
- **Roman Urdu**: Yeh sirf `email` property ko console pe print karegi, yani "shaheerahmad9023@gmail.com" dikhaye ga.

### 7. Sirf `phone` print karna
```typescript
console.log('===Phone===');
console.log(person.phone);
```
- **Roman Urdu**: Yeh sirf `phone` property ko console pe print karegi, yani `3127511011` dikhaye ga.

### Summary
- Tumne do types ko mila kar ek object banaya.
- Har property ko alag alag console pe print kiya.