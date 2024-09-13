# Nested If-else statement in TypeScript

## Step 1: Username, Password, aur Code ko Assign karna
Sab se pehle, `username`, `password`, aur `code` ko assign kiya jaata hai.

```typescript
let username: string = "shaheer";
let password: number = 1234;
let code: string = "1234";
```

## Step 2: Sahi Maloomat Display karna
Yeh section screen par header print karta hai jo batata hai ke sahi maloomat check ki ja rahi hain.

```typescript
console.log('_____________________');
console.log('CORRECT INFORMATION');
console.log('_____________________');
```

## Step 3: Username aur Password Check karna
Yeh `if` statement check karta hai ke `username` aur `password` dono sahi hain ya nahi.

```typescript
if (username == "shaheer" && password == 1234) {
    console.log('kindly provide code');
    
    // Agla step agar username aur password sahi hain
}
else {
    console.log('login failed');
}
```

## Step 4: Code Check karna
Agar pehla condition true ho, phir yeh code check karta hai ke user ne sahi `code` diya hai ya nahi.

```typescript
if (code == "1234") {
    console.log('_______________________________________________');
    console.log('welcome to your account ' + username);
    console.log('_______________________________________________');
}
else {
    console.log('invalid code');
}
```

## Step 5: Ghalat Maloomat Display karna
Yeh section screen par header print karta hai jo batata hai ke ab ghalat maloomat check ki ja rahi hain.

```typescript
console.log('_____________________');
console.log('WRONG INFORMATION');
console.log('_____________________');
```

## Step 6: Ghalat Password ke Sath Login
Yeh `if` statement check karta hai ke `username` sahi hai lekin password ghalat hai, is liye else block execute hoga.

```typescript
if (username == "shaheer" && password == 345) {
    console.log('kindly provide code');
    if (code == "1234") {
        console.log('login successful');
    }
    else {
        console.log('invalid code');
    }
}
else {
    console.log('login failed');
}
```

### Final Output: 
- Agar username aur password sahi hain, code verify karne ke baad account me access mil jata hai.
- Agar username ya password galat hain, "login failed" ka message aata hai.
