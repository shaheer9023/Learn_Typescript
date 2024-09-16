

# Parameters & Arguments in Typescript

1. **Function Syntax (number type example)**  
   ```ts
   function add(parameter1: number, parameter2: number) {
       return parameter1 + parameter2;
   }
   console.log('add(2, 3) = ' + add(2, 3)); 
   ```
   **Explanation:**  
   - Yahan `add` aik function hai jo do parameters leta hai: `parameter1` aur `parameter2`, aur dono ka data type `number` hai.
   - `return` statement dono numbers ka sum karta hai.
   - Jab hum `add(2, 3)` call karte hain, `2` aur `3` arguments hain jo function ke parameters ko values dete hain.

2. **String type example**  
   ```ts
   function Add(parameter1: string, parameter2: string) {
       return parameter1 + parameter2;
   }
   console.log('add("2", "3") = ' + Add("2", "3"));
   ```
   **Explanation:**  
   - Yeh function strings ko add karta hai. Yahan parameters ka data type `string` hai.
   - Jab hum `Add("2", "3")` ko call karte hain, output `"23"` hota hai kyunki ye strings ko concatenate karta hai.

3. **Another Example**  
   ```ts
   function print(parameter1: string, parameter2: string) {
       console.log('parameter1 = ' + parameter1);
       console.log('parameter2 = ' + parameter2);
   }
   print('2', '3');
   print("50", "100");
   ```
   **Explanation:**  
   - `print` function do parameters leta hai jo `string` type ke hain. Yeh unhe console mein display karta hai.
   - `print('2', '3')` aur `print("50", "100")` dono cases mein string values arguments ke tor par pass ki gayi hain.

4. **Default Parameter Example**  
   ```ts
   let subtract = function (parameter1: number, parameter2: number = 10) {
       return parameter1 - parameter2;
   }
   console.log('subtract(5) = ' + subtract(5));
   ```
   **Explanation:**  
   - Yahan `subtract` function ka aik default parameter hai. `parameter2` ki default value `10` hai.
   - Jab hum `subtract(5)` ko call karte hain, output `-5` hota hai kyunki parameter2 ko default value `10` mil gayi hai.

