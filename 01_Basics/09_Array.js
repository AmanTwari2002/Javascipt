const myArr = [0,1,2,3,4,5]
const myHeros = ['Shaktiman','naagraj']

//console.log(myArr[1]);


// Array method

//myArr.push(5) // add value in last
//console.log(myArr);

//myArr.pop() // delete from last
//console.log(myArr);

//myArr.unshift(9) // add value in first
//myArr.shift()    // remove from first
//console.log(myArr);

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(3));


// const newArr=myArr.join()
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice

console.log("A",myArr);
const myn1=myArr.slice(1,3) //

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) // us range ka pura portion original me se nikal jata hai
console.log("C",myArr);
console.log(myn2);