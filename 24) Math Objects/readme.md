# TypeScript Math Methods - Explanations and Code Examples

## Math.round()
- Number ko nearest integer tak round karta hai.
- Example:
    ```ts
    let a: number = 10.6;
    console.log(Math.round(a)); // Output: 11
    ```

## Math.ceil()
- Number ko upper integer tak round karta hai.
- Example:
    ```ts
    let b: number = 10.4;
    console.log(Math.ceil(b)); // Output: 11
    ```

## Math.floor()
- Number ko lower integer tak round karta hai.
- Example:
    ```ts
    let c: number = 10.6;
    console.log(Math.floor(c)); // Output: 10
    ```

## Math.trunc()
- Sirf integer part return karta hai aur decimal ko ignore karta hai.
- Example:
    ```ts
    let d: number = 10.6;
    console.log(Math.trunc(d)); // Output: 10
    ```

## Math.pow()
- Number ko power raise karta hai.
- **Syntax:** `Math.pow(number, exponent)`
- Example:
    ```ts
    console.log(Math.pow(2, 2)); // Output: 4
    console.log(Math.pow(2, 3)); // Output: 8
    console.log(Math.pow(6, 8)); // Output: 1679616
    ```

## Math.sqrt()
- Kisi number ka square root return karta hai.
- Example:
    ```ts
    let e: number = 25;
    console.log(Math.sqrt(e)); // Output: 5
    ```

## Math.min()
- Array mein se sabse chhota number return karta hai.
- Example:
    ```ts
    let f: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(Math.min(...f)); // Output: 1
    ```

## Math.max()
- Array mein se sabse bara number return karta hai.
- Example:
    ```ts
    let g: number[] = [543, 454, 344, 54, 34, 23, 17, 62, 30, 28];
    console.log(Math.max(...g)); // Output: 543
    ```

## Math.random()
- 0 aur 1 ke beech random number generate karta hai.
- Example:
    ```ts
    console.log(Math.random()); // Output: Random number between 0 and 1
    ```
