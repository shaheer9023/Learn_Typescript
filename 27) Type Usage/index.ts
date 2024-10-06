//  Type

type Name=string
type age=number
type id=number

let Name: Name="Shaheer";
let age: age=21;
let id: id=313;
console.log('Name: ',Name,'age: ',age,'id: ',id);

type Employee={
    Name:Name,
    age:age,
    id:id
};
let employee1:Employee={
    Name:"Shaheer",
    age:21,
    id:313
};
console.log('employee1: ',employee1);

console.log('Name: ',employee1.Name,'age: ',employee1.age,'id: ',employee1.id);

// let employee2:Employee={
//     Name:"Anas",
//     age:"21",//Error! "age" must be a number
//     id:"313"//Error! "id" must be a number
    
// };
