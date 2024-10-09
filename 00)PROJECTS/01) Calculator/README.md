
# Simple Calculator using TypeScript/JavaScript  Using Node.js

## Overview
Yeh ek simple calculator program hai jo user se do numbers aur ek operator input karta hai (`+`, `-`, `*`, `/`), aur phir result show karta hai. Is program mein hum switch statement ka use karte hain operations perform karne ke liye.

### Installation Steps

1. **Prompt-sync Install karna**  
   Sabse pehle aapko `prompt-sync` package install karna hoga, jo user input lene mein madad karta hai. Is ke liye command chalayein:
   ```
   npm i prompt-sync
   ```

2. **Agar error aaye (Types Issue)**  
   Agar installation ke baad `types` ka error aaye, toh aapko yeh command chalani hogi taake `node` ke types ko handle kiya ja sake:
   ```
   npm i --save-dev @types/node
   ```

### Code Explanation

- **Prompt-sync** se hum user input lete hain.
- User se pehle do numbers aur ek operator mangwaye jate hain.
- `Switch` statement ke zariye hum operator ke hisaab se calculation perform karte hain.
- Result ko `console.log` ke zariye print karte hain, agar operator galat ho toh "Invalid operator" print karte hain.

### Code:

```javascript
var prompt=require('prompt-sync')();
let n1=parseInt(prompt("Enter the first number: "));
let n2=parseInt(prompt("Enter the second number: "));
let operator=prompt("Enter the operator: (+,-,*,/) ");
switch (operator) {
    case '+':
        console.log( "the result of ", n1, operator, n2, "is", (n1 + n2));
        break;
    case '-':
        console.log("the result of ", n1, operator, n2, "is", n1 - n2);
        break;
    case '*':
        console.log("the result of ", n1, operator, n2, "is", (n1 * n2));
        break;
    case '/':
        console.log( "the result of ", n1, operator, n2, "is", n1 / n2);
        break;
    default:
        console.log("Invalid operator");
        break;
}
export {};
```

### Usage
Program ko run karne ke liye, terminal mein command chalayein:
```
node <file-name>.js
```

User ko pehle do numbers aur operator dena hoga, aur result terminal mein dikhayi dega. Agar operator galat ho, toh "Invalid operator" print hoga.

---

