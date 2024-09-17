# Union Types 

1. **Union Type Definition**:
   ```ts
   type A = string | number;
   ```
   Is line me hum ne `A` naam ka ek type define kiya jo ya to `string` ho sakta hai ya `number`. Matlab `A` ko ya to string values milengi ya number values.



2. **Example Code (Without Union Type)**:
   ```ts
   let mobile: string = "samsung";
   mobile = 33202; // Error
   ```
   Yahan `mobile` variable ko sirf `string` type diya gaya hai, lekin jab hum number assign karte hain, TypeScript error show karta hai kyunki `number` assign nahi ho sakta `string` type wale variable ko.

3. **Solve Using Union Types**:
   ```ts
   let mobile: string | number = "samsung";
   mobile = 33202;
   console.log('mobile', mobile);
   ```
   Yahan hum ne union type `string | number` ka istemal kiya hai. Ab `mobile` ko dono values (string aur number) assign ki ja sakti hain. Pehle hum "samsung" string assign karte hain, phir 33202 number. Dono types yahan valid hain.
