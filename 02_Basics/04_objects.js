//Singleton Object - Same Meaning

const appUser = new Object();

appUser.email = "some@gmail.com";
appUser.id = "123abc";

appUser.address = {
    city : "mathura",
   localRegion :{
    street : "Agrasen Road",
    house_no : 23
   }
}
console.log(appUser);
console.log(appUser.address?.localRegion.street); //optional chaining

const obj1 = {1: "a" , 2 : "b"};
const obj2 = {3: "a" , 4 : "b"};

//const obj3 = Object.assign({},obj1,obj2); //better syntax
const obj3 = {...obj1, ...obj2}; //90% times
console.log(obj3);

console.log(obj3.hasOwnProperty("1"));
console.log(Object.keys(obj3)); // when get info fron api
console.log(Object.values(obj3));

const course = {
  courseName : "Javascript",
  coursePrice : 999,
  courseInstructor : "Hitesh"
}

const { courseInstructor } = course; //can use directly
const { courseInstructor : instructor} = course;  //short name

console.log(instructor); //use in react

//Json 
// {
//     "name" : "kirti",
//     "email" : "some@gmail.com"
// }

// [
//     {},
//     {}
// ]

// Use Random user api and json formatter 