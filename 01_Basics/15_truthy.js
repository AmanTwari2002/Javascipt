// const userEmail="aman@gmail.com"
const userEmail=[]
if(userEmail){
    console.log("got user email")

}
else{
    console.log("dont have user emial")
}


//falsy value
 //false , 0 ,-0 , BigInt 0n ," ", null , undefined , NaN

 // truthy value
 //"0","fasle"," " , [] , {} , function(){}

//  if(userEmail.length===0){
//     console.log("Array is empty");
//  }

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty")
}


// Nullish Coalescing Operator(??):null undefined

// let val1;
// val1=5??10
// val1=null??10

// console.log(val1);



// Ternary Operator

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80");