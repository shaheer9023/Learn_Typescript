# Ternary operator in typescript
**Ternary operator ko hum if-else statement ka shortcut keh sakte hain. Ismein hum ek condition check karte hain, agar wo condition true ho to pehla code (code 1) execute hota hai, agar false ho to doosra code (code 2) execute hota hai.**

### Step-by-step explanation:
1. **Syntax**:
   - `condition ? code 1 : code 2`
   - Agar condition true ho to `code 1`, warna `code 2` execute hota hai.

2. **First example**:
   ```ts
   let myname:string = "shaheer";
   let myage:number = 21;
   
   myage == 21 && myname == "shaheer" ? console.log('correct name and age') : console.log('wrong name or age');
   ```
   - Yahan par pehli condition check ho rahi hai `myage == 21` aur doosri condition hai `myname == "shaheer"`. 
   - Dono condition true hain, to ye `correct name and age` print karega.

3. **Second example**:
   ```ts
   myage==22 && myname=="shaheer" ? console.log('correct name and age') : console.log('wrong name or age');
   ```
   - Yahan `myage == 22` condition false hai, is liye ye `wrong name or age` print karega.

### Ek aur example:

```ts
let x = 10;
let y = 20;

// Ternary operator se check karte hain
x > y ? console.log('x is greater than y') : console.log('y is greater than or equal to x');
```
- Yahan `x > y` condition false hai, is liye ye `y is greater than or equal to x` print karega.

Ternary operator ka faida ye hota hai ke aap if-else ko short kar ke likh sakte hain.