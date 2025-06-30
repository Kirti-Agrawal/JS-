// //ES6

// class User{
//     constructor(username , email , password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
// return `${this.password}abc`
//     }
//     toUpperCase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai" , "chai@gmail.com" , "123")
// console.log(chai.encryptPassword());
// console.log(chai.toUpperCase());

//Without classes = behind the scenes

function User(username , password , email){
  this.username = username
        this.email = email
        this.password = password
}
User.prototype.encryptPassword = function(){
 return `${this.password}abc`   
}
const tea = new User("tea" , "tea@gmail.com" , "123")
console.log(tea.encryptPassword());
