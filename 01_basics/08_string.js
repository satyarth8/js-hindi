const name="Satyarth"
const repoCount = 50

// console.log(name +repoCount +"Value");


//using string interpolation
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);


const gameName =new String('Satyarth')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

const anotherString = gameName.slice(-8,4)
const anotherString2 = gameName.substring(-8,4)

console.log(anotherString2);

const spacedString ="     Sd SD sd          "
console.log(`not trimmed :${spacedString} trimmed:${spacedString.trim()}`);

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(url.split('/'));

 
