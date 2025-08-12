//regular function
function getName(){
    console.log("Luna");
}
getName();

//arrow func
const name=()=>{
    console.log("Hello!");
}
name();

//function to add two numbers
let c=10;
let d=20;
const add=(a,b)=>{
    return a+b; 
}
console.log(`${c} + ${d}  = ${add(c,d)}`);

