//  parameters & Arguments
//  syntax and example with number type
 function add(parameter1: number, parameter2: number) {
    return parameter1 + parameter2;
}
console.log('add(2, 3) = ' + add(2, 3));// here 2 and 3 are arguments


// example with string type
function Add(parameter1: string, parameter2: string) {
    return parameter1 + parameter2;
}
console.log('add("2", "3") = ' + Add("2", "3"));// yahan output 23 hoga qki 2 aur 3 string hai



//Another Example
function print(parameter1: string, parameter2: string) {    
    console.log('parameter1 = ' + parameter1);
    console.log('parameter2 = ' + parameter2);
}

print('2', '3');

    //  print different values
    print("50", "100");//jo paramereter ki data type hogi wohi arguments dene hain 

    //  hum parameter ko default value bhi de skty hain
    let subtract = function (parameter1: number, parameter2: number = 10) {
        return parameter1 - parameter2;

    }
    console.log('subtract(5) = ' + subtract(5));
    