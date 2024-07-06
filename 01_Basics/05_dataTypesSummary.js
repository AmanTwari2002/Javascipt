// primitive DataType

// 7 type : string , number , boolean , null , undefined , Symbol , BigInt


// js is a dynamically type language

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id===anotherId);

// Refrence type(non-preimitive)
// Arrays , objects , Functions


const heros =["shaktiman","naagraj","doga"]

let myObj= {
    name:"Aman",
    age:22,

}

const myFunction=function(){
    console.log("hello world")
}
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);




/////         Memory in javasccript

// Stack(primitive) => jab use hota hai jo bhi varibable declare hota hai uska copy milta hai

let myYoutubename = "AmanTiwari"
let anotherName = "Aman"
anotherName = "Tiwari"
console.log(myYoutubename);
console.log(anotherName);



//Heap(non-primitive) => isme refrence milta hai original value ka jo bhi change hota hai original value me change haota hai

let user={
    email : "user@google.com",
    upi : "user@ybl"
}
let user2=user
user2.email="aman@gmail.com"

console.log(user.email);
console.log(user.email); 