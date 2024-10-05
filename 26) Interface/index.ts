//  Interface in Typescript

interface employee {
    name:string,
    age:number,
    address:string,
    salary:number
};

let employee1:employee = {
    name: "shaheer",
    age: 21,
    address: "lahore",
    salary: 100000
};

let employee2:employee = {
    name: "waseem",
    age: 22,
    address: "karachi",
    salary: 1200000
};

console.log('===========================');
console.log("---------employee1---------");
console.log('===========================');
console.log(employee1);
console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.address);
console.log(employee1.salary);
console.log('===========================');
console.log("---------employee2---------");
console.log('===========================');
console.log(employee2);
console.log(employee2.name);
console.log(employee2.age);
console.log(employee2.address);
console.log(employee2.salary);





