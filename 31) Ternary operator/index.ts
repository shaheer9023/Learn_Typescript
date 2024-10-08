// Ternary operator 
// syntax
// condition or conditions ? code 1 : code 2

let myname:string = "shaheer";
let myage:number = 21;

if(myage == 21 && myname=="shaheer"){
    console.log('correct name and age');
}else{
    console.log('wrong name or age');
    }

    // now we have ternary operator

    myage == 21 && myname == "shaheer" ? console.log('correct name and age') : console.log('wrong name or age');

    //it will print correct name and age

    // now change the information

    myage==22 && myname=="shaheer" ? console.log('correct name and age') : console.log('wrong name or age');

    //it will print wrong name or age

    so basically ternary operator will be like if else statement