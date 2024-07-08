 // singleton

 // object.create

 // object literals
 const mySym=Symbol("key1")

 const jsUser={
    name:"Aman",
    "full name":"Aman Tiwari",
    [mySym]:"myKey1",
    age:22,
    location:"jaipur",
    email:"aman2@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }
//  console.log(jsUser.email);
//  console.log(jsUser["email"]);
//  console.log(jsUser["full name"]);
//  console.log(jsUser[mySym]);

//  jsUser.email="aman20@gmail.com"
//  Object.freeze(jsUser)
//  jsUser.email="Aman@microsoft.com"
//  console.log(jsUser)


 jsUser.greeting=function(){
    console.log("hello jsUser")
 }
 jsUser.greeting2=function(){
    console.log(`hello js user , ${this.name}`)
 }
 // console.log(jsUser.greeting) // undefined
 console.log(jsUser.greeting())
 console.log(jsUser.greeting2())

