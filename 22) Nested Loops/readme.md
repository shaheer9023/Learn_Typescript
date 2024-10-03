Nested loops in TypeScript

### Nested Loops Pyramid:
1. **First Part:**
   ```typescript
   let a:string="";
   for(let i=1;i<=5;i++){
       for(let j=1;j<=i;j++){
           a=a+"*";
       }
       a=a+"\n";
   }
   console.log(a)
   ```
   - **Line 1:** `let a:string=""` – Yahan hum ek khali string `a` banate hain jo asterisks (`*`) ko store karegi.
   - **Line 2:** `for(let i=1;i<=5;i++)` – Yeh outer loop hai jo 1 se le kar 5 tak chalega. Har loop ek naya row banayega.
   - **Line 3:** `for(let j=1;j<=i;j++)` – Yeh inner loop hai jo har row ke andar asterisks add karta hai. Yeh row number jitna stars print karega.
   - **Line 4:** `a=a+"*"` – Yeh line har iteration me ek `*` ko string `a` me add karti hai.
   - **Line 5:** `a=a+"\n"` – Jab ek row complete ho jati hai, to `\n` add karke nayi line shuru hoti hai.
   - **Line 6:** `console.log(a)` – Loop ke baad, pura pyramid console me print hota hai.

### User Input with Prompt-Sync:
2. **Second Part:**
   ```typescript
   let prompt=require("prompt-sync")();

   let rows:number=parseInt(prompt("Enter the number of rows : "));
   let num:number=0;
   for(let i=1;i<=rows;i++){
       let output:string="";
       for(let j=1;j<=i;j++){
           output+=j;
       }
       console.log(output);
   }
   ```
   - **Line 1:** `let prompt=require("prompt-sync")();` – Hum `prompt-sync` module ko import kar rahe hain, jo hume input lene ki facility deta hai. Pehle npm se install karna hota hai (`npm i prompt-sync`).
   - **Line 2:** `let rows:number=parseInt(prompt("Enter the number of rows : "));` – User se rows ka input liya ja raha hai aur us input ko integer me convert kiya ja raha hai `parseInt` ke zariye.
   - **Line 3:** `let num:number=0;` – Ek number variable banaya gaya hai lekin isme koi kaam nahi ho raha.
   - **Line 4:** `for(let i=1;i<=rows;i++)` – Yahan outer loop rows ke hisaab se chal raha hai jo user ne diya.
   - **Line 5:** `let output:string="";` – Har nayi row ke liye ek khali string banayi ja rahi hai.
   - **Line 6:** `for(let j=1;j<=i;j++)` – Inner loop row ke andar numbers print karne ke liye use ho raha hai. Har row me `i` tak ka number print hoga.
   - **Line 7:** `output+=j;` – Har number ko string me add kar rahe hain.
   - **Line 8:** `console.log(output);` – Har row ke baad usko print kiya ja raha hai.

Yeh code pehle ek pyramid print karta hai aur phir user se number of rows lekar numbers ka pyramid banata hai.