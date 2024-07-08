const marvelHeros = ["Thar","Ironman","Spiderman"]
const dcHeroes= ["Superman","flash","batman"]

// marvelHeros.push(dcHeroes)
// console.log(marvelHeros);


const allHeros=marvelHeros.concat(dcHeroes)
console.log(allHeros);

//spread operator as compare to concate everyone prefer this one
const all_new_Heros = [...marvelHeros,...dcHeroes] 
console.log(all_new_Heros);


another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"))
console.log(Array.from({name:"Aman"})); 


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))