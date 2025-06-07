//Arrays

const someDays = ["Sunday", "Monday", "Tuesday"];
const someotherDays = ["Wednesday", "Thursday", ["Friday","Saturday"]];
const leftDay = ["Saturday"];

//join two or more arrays
//  const allDays = someDays.concat(someotherDays); //return new Array but only depth 1
// console.log(allDays);

// someDays.push(someotherDays); //push only value not an array
// console.log(someDays);

const allDays = [...someDays,...someotherDays,...leftDay]; // all arrays join easily

const real_another_array = allDays.flat(Infinity);  //To any depth
console.log(real_another_array); 

// Convert String ,Object to Arrays (Node List )  //Very Useful
//DOM Manipulation

console.log(Array.from("Kirti Agrawal"));// included map function
console.log(Array.from({name : "Kirti Agrawal"}));  //based on Values or Keys


// 
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
