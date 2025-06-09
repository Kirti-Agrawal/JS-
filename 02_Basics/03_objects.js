//JS Objects

//Singleton
//Object.create();

let mySym = Symbol("newSym");
//Literal 
let jsObject = {
    name: "kirti",                        // Keys automatic string
    "fullname" : "Kirti agrawal",
 age : 18,
 isLoggedIn : false,
 lastLoggedDays : ["Monday","Tuesday"],
[mySym]: "newS"
}

//Acccess
console.log(jsObject.fullname);
console.log(jsObject["fullname"]);

console.log(jsObject[mySym]);
console.log(typeof jsObject[mySym]);


//Object.freeze(jsObject);
jsObject.age = 80;
console.log(jsObject);

jsObject.greeting = function(){
    console.log("Hello JS User " + this.fullname);
    
}
console.log(jsObject.greeting); //call reference
console.log(jsObject.greeting()); // call function



