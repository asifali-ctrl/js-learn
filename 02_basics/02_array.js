const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

marvel_heros.push(dc)
//console.log(marvel_heros);
//console.log(marvel_heros[3]);

const new_heros=marvel_heros.concat(dc)
//console.log(new_heros);

const all_heros=[...marvel_heros,...dc]
//console.log(all_heros);

const another_array=[1,2,3,[4,5,6],[8,[1,2]]]
const new_another_array=another_array.flat(Infinity)
//console.log(new_another_array);


//console.log(Array.isArray("asif"));
//console.log(Array.from("asif"));
//console.log(Array.from({name:"asif"}));    //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


