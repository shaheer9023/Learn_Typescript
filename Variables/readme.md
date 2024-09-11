# TypeScript Variables








## Explanation

* **name1**: Declared as a string variable and assigned the value "Shaheer".
* **name2**: Declared as a number variable and assigned the value 1.
* **Output**: Both variables are printed using the `console.log()` function.

## Code

```typescript
let name1: string = "Shaheer";
// name1 = 1; // error Type 'number' is not assignable to type 'string'.
console.log('Hello, ' + name1);

let name2: number = 1;
console.log('Hello, ' + name2);