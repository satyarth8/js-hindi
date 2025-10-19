// Primitive
// 7 types:
// String
// Number
// Boolean
// null - empty or 0
// undefined - memory space taken but no value assigned
// Symbol - 
// BigINT - Scientific Large Value

//Reference type or Non primitive
// Array
// Objects
// Functions

const isLoggedIn = false
const outsideTemp = null
let userEmai;

//basic usage of symbol
const id=  Symbol('')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 1231231231231321n

const heros= ["shaktiman","nagraj","doga"]//Array

const Objt ={ name: "Satyart",
    age:22,
}

const myFunction = function(){
    console.log("hello World");
}

myFunction()

console.log(typeof myFunction);

