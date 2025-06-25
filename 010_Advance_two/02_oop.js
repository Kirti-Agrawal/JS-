//Object Literals
 const user = {
    username : "JavascriptDone",
    duration : 10,
    getInfo  : function (){
        console.log(`Hello USer ${this.username}`);
        
    }
}
const user2 = {
    username : "JavascriptDone",
    duration : 10,
    getInfo  : function (){
        console.log(`Hello USer ${this.username}`);
        
    }
}

console.log(user.getInfo());

function User(username , isLoggedIn , loginCount){
this.username = username;
this.isLoggedIn = isLoggedIn;
this.loginCount = loginCount;
this.greeting = function (){
    console.log(`Welcome ${this.username}`);
    
}
return this;
}
// const userOne = User("Javascript" , true , 2);
// const userTwo = User("Java" , false , 1);

// console.log(userOne); //Issue 


 const userOne = new User("Javascript" , true , 2);
 const userTwo = new User("Java" , false , 1);
 
 console.log(userTwo);  
 console.log(userTwo.greeting());  
 console.log(userTwo.constructor);  //refrence to the self //Instanceof
 console.log(this);  
//Constructor function

