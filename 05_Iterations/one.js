//For While Do-While 

// Array Specific For-of For-in ForEach(Higher Order Func)

//For-Of for any iterable - array ,strings , map 

// const myArray = [1,2,3,4,5];
// const myString=  "Hello World"
// const myObject = {
//     id: 1,
//     name : "Kirti"
// }


//Maps
const map = new Map();
map.set("in" , "India");
map.set("us" , "USA");
map.set("aus" , "Australia");

// console.log(map);

for (const [key,value] of map) {
    console.log(`${key}  => ${value}`);
    
}

// For-In Loop


// const myArray = [1,2,3,4,5];
// const myString=  "Hello World"
const myObject = {
    id: 1,
    name : "Kirti"
}

for (const key in myObject) {      //Most Useful in Object
//  console.log(`${key} => ${myObject[key]}`);
 
}

//ForEach
const myArray = [1,2,3,4,5]; //takes callback as firxt argument
const myObject2 = [
    {
        id : 1,
        name : "kirti"
    },
    {
        id : 2,
        name : "Rohit"
    },
    {
        id : 3,
        name : "Parul"
    },
]

myObject2.forEach(element => {  //element =array each element
    // console.log(` ${element.name} has ${element.id} id`);
    
});

myObject2.forEach((element ,index , myObject2) => {
//  console.log(`${myObject2}`);  //return 3 arguments
 
});

const myCallback = element => console.log(element.name);

myObject2.forEach(myCallback);   //sECOND SYNTAX OF FOREACH

