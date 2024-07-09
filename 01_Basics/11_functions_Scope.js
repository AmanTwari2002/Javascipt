//var c=300
let a=300 // global scope : it can be accesed anywhere

if(true){      // block scope : 
    let a=10
    const b=20
    var c=30
    //console.log("inner",a);
}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username="Aman"

    function two(){
        const website="aman.com"
        console.log(username);
    }
    //console.log(website);
    //two()

}

//one()

if(true){
    const username="Aman"
    if(username==="Aman"){
        const website="youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);



// ********************** Interesting *********************


console.log(addone(5)) // this one run easily
function addone(num){
    return num+1
}


//console.log(addtwo(5)) // this throw error
const addtwo=function(num){
    return num+2
}
