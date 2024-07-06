const name = "Aman"
const age = 22

// console.log(name+age+"value");

console.log(`hello my name is ${name} and my age is ${age}`);

const gemeName=new String('Amanhhc')
console.log(gemeName[0]);
console.log(gemeName.__proto__);
console.log(gemeName.length);
console.log(gemeName.toUpperCase());
console.log(gemeName.charAt(2));
console.log(gemeName.indexOf('a'));

//const newString = gemeName.substring(0,4)
console.log(gemeName.substring(0,4));
console.log(gemeName.slice(-8,4)); 

const newString ="      Aman      "
console.log(newString);
console.log(newString.trim());



const url = "http://Aman.com/Aman%20Tiwari"
console.log(url.replace('%20','_'));

console.log(url.includes('Aman'));
console.log(url.includes('raja'));

console.log(gemeName.split('-'))