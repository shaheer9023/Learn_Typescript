//  Objects
//  syntax
// let object={
//     key1:value1,
//     key2:value2
// }

// example 1
console.log('======BEFORE DELETION========');


let user={
    firstname:"Shaheer",
    lastname:"Ahmad",
    age:21,
    Hobbies:["Reading","Singing","Dancing"],
    salary:()=>{200000}
};
console.log('user is :',user);
console.log('user firstname is :',user.firstname);
console.log('user lastname is :',user.lastname);
console.log('user age is :',user.age);
console.log('user fullname is :',user.firstname+' '+user.lastname);
console.log('user Hobbies are :',user.Hobbies);
console.log('user Hobbies length is :',user.Hobbies.length);
console.log("user's first Hobbies is :",user.Hobbies[0]);
console.log("user's 2nd Hobbies is :",user.Hobbies[1]);
console.log('user salary is :',user.salary());

// we can also delete key from object
delete user.salary;

console.log('======AFTER DELETION========');
console.log('user is :',user);

// now let search anything else in object
console.log('======SEARCHING========');

console.log('email' in user); //false
console.log('age' in user); //true

// Nested Objects

console.log('======NESTED OBJECTS========');

let address={
    city:"lahore",
    country:"pakistan",
    state:"punjab",
    myaddress:{
        address1:"Lahore",
        address2:"Punjab",
        address3:"Sindh"
    }
};

console.log('address is :',address);
console.log('my address is :',address.myaddress);
console.log('my address 1 :',address.myaddress.address1);
console.log('my address 2 is :',address.myaddress.address2);
console.log('my address 3 is :',address.myaddress.address3);

// now print all keys

console.log('======ALL KEYS========');

console.log("method 1 : ",Object.keys(user));
console.log("method 2 ");

for(let key in user){
    console.log(key);
}












