//Date

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025, 0,23,5,3,2)
// console.log(myCreatedDate.toLocaleString());


let myCreateDate = new Date("14-1-2023")

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.now());
