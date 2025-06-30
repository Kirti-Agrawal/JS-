function setUserName(username){
    //complex calculations
this.username = username
console.log(this.username);

}

function createUSer(username , email , password){
    // setUserName(username) ///reference
    setUserName.call(this, username) //pass current execution
this.email = email
this.password = password
}

const chai  =new createUSer("Chai" , "chai@fb.com" , "123")
console.log(chai);

///dono ka execution context alag alag store hai 