//  Object Destructuring
let object = {
    name2: "shaheer",
    age1: 21,
    height1: 5.10,
    hobbies: ["cricket", "music", "coding"]
};
let { name2, age1, height1,hobbies } = object;
console.log("name : ",name2);//shaheer
console.log("age : ",age1);//21
console.log('height : ',height1.toFixed(2));//5.10
console.log('hobbies : ',hobbies);//[ 'cricket', 'music', 'coding' ]
console.log('first hobby : ',hobbies[0]);//cricket
console.log('last hobby : ',hobbies[hobbies.length-1]);//coding

