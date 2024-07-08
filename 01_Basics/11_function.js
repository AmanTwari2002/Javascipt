// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }
// //addTwoNumber(3,4)
// const result=addTwoNumber(3,8)
// console.log("Result:",result);

function addTwoNumber(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}
const result=addTwoNumber(3,8)
//console.log("Result:",result);

function loginUserMessage(username){
    // if(!username){} both are same
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return`${username} just logged in`
}
//console.log(loginUserMessage("Aman"))
//console.log(loginUserMessage())


 function calculateCartPrice(...num1){ // rest or spread operator
    return num1
}
// console.log(calculateCartPrice(200,400,500));

function calculateCartPrice(val1,val2,...num1){ // rest or spread operator
         return num1
     }
//console.log(calculateCartPrice(200,400,500,4000));


const user={
    username:"Aman",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

 //     OR

handleObject({
    username:"Sam",
    price:299
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));

//   OR

console.log(returnSecondValue([200,400,100,600]));