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