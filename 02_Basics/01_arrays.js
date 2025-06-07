//array

let myArr = [0,1,2,3,4,5];

console.log(myArr);
//push pop shift unshift ( unshift not recommended)

// slice - extract portion from array
console.log(myArr.slice(1,4));
console.log(`myArr : ${myArr}`);

//splice - changes to original array
myArr.splice(1,2);
console.log(`After Splice : ${myArr}`);

//array to String
console.log(myArr.join());