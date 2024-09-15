# Else_if Statement in Typescript

### Step 1: Username, Password, aur Code ko Assign karna
Sab se pehle, `username`, `password`, aur `code` ko values assign ki jaati hain.

```typescript
let username = "Ahmad";
let password = 4414;
let code = "1234";
```

### Step 2: Else If Block Use Hona
Console par header print hota hai jo batata hai ke ab `else if` block ka use ho raha hai.

```typescript
console.log('_____________________');
console.log('NOW ELSE IF BLOCK IS USED');
console.log('_____________________');
```

### Step 3: Pehla If Condition
Yeh condition check karta hai ke agar `username == "shaheer"` aur `password == 1234` hain toh login ka process aage barhega. 

```typescript
if (username == "shaheer" && password == 1234) {
    console.log('kindly provide code');
    if (code == "1234") {
        console.log('_______________________________________________');
        console.log('welcome to your account ' + username);
        console.log('_______________________________________________');
    }
    else {
        console.log('invalid code');
    }
}
```
- Is case me, yeh condition false hogi kyun ke `username == "Ahmad"` hai aur `password == 4414`.

### Step 4: Dusra Else If Condition (Sahi Maloomat ke Sath)
Yeh condition `else if` ke sath check karta hai ke agar `username == "Ahmad"` aur `password == 4414` hain, tab login ka process aage barhega. Is case me, yeh condition true hogi.

```typescript
else if (username == "Ahmad" && password == 4414) { 
    console.log('kindly provide code');
    if (code == "1234") {
        console.log('_______________________________________________');
        console.log('welcome to your account ' + username);
        console.log('_______________________________________________');
    }
    else {
        console.log('invalid code');
    }
}
```
- Is block me `code == "1234"` bhi sahi hai, toh user ko account me access mil jata hai.

### Step 5: Else Block (Agar Koi Condition True Na Ho)
Agar `if` aur `else if` dono false ho jaati hain, toh yeh `else` block execute hota hai, jo batata hai ke login fail ho gaya hai.

```typescript
else {
    console.log('login failed');
}
```

### Final Output:
- Kyun ke `username == "Ahmad"` aur `password == 4414` theek hain, aur `code == "1234"` bhi sahi hai, user ko account me access milta hai.

