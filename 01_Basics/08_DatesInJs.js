let myDate = new Date()
//console.log(myDate); not redable
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024,0,6)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024,0,6,5,3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
// console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
    
})