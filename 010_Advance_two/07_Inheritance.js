class User{
    constructor(username)
{
this.username = username;
}
logMe(){
    console.log(`USername is ${this.username}`);
    
}
}

class Teacher extends User{
    constructor(username , email , password){
        super(username);   ///inspite of call (super used)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course is added`);
        
    }
}

const chai = new Teacher("chai" , "chai@gmail.com", "123")
chai.logMe();
chai.addCourse();
console.log(chai instanceof User)