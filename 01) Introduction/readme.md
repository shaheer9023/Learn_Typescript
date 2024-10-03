
# TypeScript is a Programming Language

It is a superset of JavaScript developed by Microsoft and is Object-Oriented.

## Benefits

* Manageable Code - Code ko aasani se samjha ja sakta hai aur manage karna asaan hota hai.
* ECMAScript support - ECMAScript ke latest features ko support karta hai. ECMAScript aik standard hai jo JavaScript ke rules aur features ko define karta hai.
* Hum data types, classes, interfaces, waghera use kar sakte hain - Yeh object-oriented features ko achi tarah support karta hai.
* IDE Support (Intellisense) - Code likhte waqt suggestions aur errors ka pata chal jata hai, jo ke kaam ko tezi se karne mein madad deta hai.

## Requirements for Installation:

- Node.js

- VS Code

- Basic knowledge of JavaScript (optional)
  

## TypeScript Code Ko JavaScript Me Convert Karna Aur Run Karna

Agar aap TypeScript ka code run karna chahte hain, to pehle aapko usay JavaScript me convert karna hota hai. Neeche step-by-step process diya gaya hai:

## 1. Tsconfig File Setup

Aapko apne TypeScript project ke liye ek `tsconfig.json` file banana hota hai. Yeh file TypeScript compiler ke settings ko define karti hai. Is file ko banane ke liye aap yeh command use karein:

```bash
tsc --init
```

Is command se ek `tsconfig.json` file generate hogi, jo aapke project ke liye zaroori hai.

## 2. TypeScript Code Ko JavaScript Me Convert Karna

TypeScript code ko JavaScript me convert karne ke liye aap `tsc` command ka istemal karte hain:

```bash
tsc
```

Is command se aapki saari `.ts` files `.js` me convert ho jayeingi.

## 3. Default Terminal - Command Prompt Use Karein

Yeh zaroori hai ke jab aap TypeScript se JavaScript me conversion kar rahe hain, to **Command Prompt (cmd)** use karein, na ke **PowerShell**. PowerShell mein kuch issues aasakte hain, is liye Windows ka default terminal yani cmd best rehta hai.



## Summary of Commands:

- `tsc --init`: Tsconfig file banane ke liye.
- `tsc`: TypeScript code ko JavaScript me convert karne ke liye.

