let myName = "Hitesh";
let myChannel = "Chai";

// console.log(myName.trim().trueLength);
// console.log(myChannel.trim().trueLength);

let myHeroes = ['One', "Two"];

let heroPower = {
    One: "Divinity",
    Two : "Powers",

    getTwoPower : function(){
        console.log(`Two Power is ${this.Two}`);
        
    }
}

//On Object  - Available in Arrays, functions , string

Object.prototype.hitesh = function(){
    console.log(`Hitesh is available in all objects`);
    
}
heroPower.hitesh();
myHeroes.hitesh();

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says Hello`);
    
}
myHeroes.heyHitesh();  //Only array ke pas
// heroPower.heyHitesh();

//Prototype Inheritance

const User = {
    name : "Chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const Teachingsupport = {
    isAvailable : false
}
const TASupport  ={
makeAssingment : "JS Assignment",
__proto__ : Teachingsupport
}

Teacher.__proto__ = User   ///Outdated Approach
  //Apas me Objects me info share kaarni

//   modern syntax/
  Object.setPrototypeOf(Teachingsupport, Teacher) 

  let anotherUserName = " Chai Aur Code          ";

  String.prototype.trueLength = function (){
    console.log(`${this.trim().length}`);
    
  }
anotherUserName.trueLength();

"hitesh".trueLength();