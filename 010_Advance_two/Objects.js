//Array - > Prototype -> Object -> null
// String => Protype -> Object -> null

function mulby2(num){
return num*2;
}
mulby2.power = 4;

console.log(mulby2.power);
console.log(mulby2.prototype);

function createUser(username,score){
this.username = username;
this.score = score;

}

//can give custom functionality to a function /arr/... using prototype

createUser.prototype.increament = function(){
    this.score++; ///jisne call kia usko badaha do
    
}
createUser.prototype.printMe = function(){
    
    console.log(`Welcome ${this.username} : Your Score is ${this.score}`);
    
}
const userOne = new createUser('Kapila', 89);

console.log(userOne.printMe());

// New Keyword: give new functiona;ity to Object