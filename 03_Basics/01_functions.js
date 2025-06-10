
function user(username  = "kirti"){  //take default values
console.log(`${username} has logged in `);
if(!username){
    console.log("Please enter your name");
    
}
}

user("Hitesh");
user();

const newUser = {
    name : "hitesh",
    age : 90
}

function handleObject(anyUser){
console.log(`${anyUser.name}  of ${ anyUser.age} has logged in`);

}

handleObject(newUser);