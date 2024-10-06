//  Extend interface


// ===Before Extending Interface===

interface person {
    name: string;
    age: number;
};


interface employee  {
    name: string;
    age: number;
    email:string
};



let person1: person = {
    name: "Shaheer Ahmad",
    age: 21
};

let employee1: employee = {
    name: "Shaheer Ahmad",
    age: 21,
    email:"shaheerahmad9023@gmail.com"
};



// ===After Extending Interface===


interface person {
    name: string;
    age: number;
};

interface employee extends person {
    email:string
};

let person2: person = {
    name: "Anas Ahmad",
    age: 23
};

let employee2: employee = {
    name: "Anas Ahmad",
    age: 23,
    email:"anasahmad9023@gmail.com"
};




//  Merge Interface


interface person {
    name: string;
    age: number;
};
interface person {
    email: string;
};

let person3: person = {
    name: "Anas Ahmad",
    age: 23
// Error!! Property 'email' is missing in type '{ name: string; age: number; }' but required in type 'person'.
};
