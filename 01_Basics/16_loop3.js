//const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach( (item)=>{
//     //console.log(item)
//     return item

// } )
// console.log(values)


const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num)=>num>4 )
// console.log(newNums)

// const newNums=myNums.filter((nums)=>{
//      return nums>4
// })
// console.log(newNums)

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


const books=[
    {title:'Book1',genre:'fiction',publish:1981,edition:2004},
    {title:'Book2',genre:'non-fiction',publish:1992,edition:2008},
    {title:'Book3',genre:'histry',publish:1999,edition:2007},
    {title:'Book4',genre:'non-fiction',publish:1989,edition:2010},
    {title:'Book5',genre:'science',publish:2009,edition:2014},
    {title:'Book6',genre:'fiction',publish:1987,edition:2010},
    {title:'Book7',genre:'histry',publish:1986,edition:1996},
    {title:'Book8',genre:'science',publish:2011,edition:2016},
    {title:'Book9',genre:'non-fiction',publish:1981,edition:1989}
];

//const userBooks=books.filter((bk)=> bk.genre=='histry')
// const userBooks=books.filter((bk)=> {
//     return bk.publish>=2000
// })

// const userBooks=books.filter((bk)=> {
//     return bk.publish>=1995 && bk.genre=='histry'
// })
// console.log(userBooks)



const myNumber=[1,2,3,4,5,6,7,8,9,10]

// const newnums=myNumber.map((num)=>  num+10)
// console.log(newnums)

// const newNums=myNumber
//               .map((num)=>num*10)
//               .map((num)=>num+1)
//               .filter((num)=>num>=40)
// console.log(newNums)              


const myNumbs=[1,2,3]
// const mytotal=myNumbs.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },3)
// console.log(mytotal)


const myTotal=myNumbs.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal)


const shoppingCart=[
    {
        itemName:"js Course",
        price:299
    },
    {
        itemName:"py Course",
        price:399
    },
    {
        itemName:"web Course",
        price:499
    },
    {
        itemName:"data science Course",
        price:899
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(priceToPay)