//two type -
// stack - Primitive - Shares Copy
// and heap - Non Primitive - Shares Reference


let myName = "Satyarth"
let yourName = myName

yourName="Nocture"
console.log(`yourName :${yourName}`);
console.log(`myName: ${myName}`);

let obj={
    name:"Satyarth",
    age:"23"
}

let obj2= obj
obj2.name="Nocture"

console.log(`Name in Obj1 ${obj.name} \n name in obj2 ${obj2.name}`);
