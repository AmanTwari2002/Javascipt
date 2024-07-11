// for of 

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }



// const greeting="hello world"
// for(const greet of greeting){
//     console.log(greet)
// }


// Maps

// const map = new Map()
// map.set('IN',"India")
// map.set('Fr',"France")
// console.log(map)

// for (const [key,value] of map) {
//     console.log(key,':-',value)
// }


// const myObject={
//     'game':'NFS',
//     'game2':'spiderman'
// }
// for(const [key , value] of myObject){
//     console.log(key,":-",value)
// } not iterable


// for in

// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple'
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming=["js","rb","py","java","cpp"]
// for(const key in programming){
//     console.log(key);
// }



// for each loop 

const coding=["js","ruby","java","python","cpp"]

// coding.forEach( function (item){
//     console.log(item)
// })

// coding.forEach( (item)=>{
//     console.log(item)
// } )


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })


const myCoding=[
    {
        languageName:"javascript",
        languagefileName:"js"
    },
    {
        languageName:"java",
        languagefileName:"java"
    },
    {
        languageName:"python",
        languagefileName:"py"
    }
]

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })

myCoding.forEach(function(item){
    console.log(item.languageName);
})