
// this keyword refer to current context
const user={
    username:"Aman",
    price:199,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        //console.log(this);
    }


}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this); // this one print empty 


function chai(){
    let username="Aman"
    //console.log(this.username);
}
chai() // output : undefined

// this keyword only work on object in function it not work


// Arrow function
const Chai= () => {
    let username="Aman"
    console.log(this.username)
} 
//Chai()


// const addTwo=(num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));

// another way to write Arrow function implicit return

//const addTwo =(num1,num2) => num1+num2
// or
//const addTwo =(num1,num2) => (num1+num2)

// returning object
const addTwo =(num1,num2) => ({username:"Aman"})
//console.log(addTwo(3,4));

// when we use curly braces use return keyword and use paranthesis dont use return


