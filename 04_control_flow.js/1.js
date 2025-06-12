// if else

// onle line if

if(true) console.log("1st if");

//switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Falsy and Truthy Values 

// Falsy Values :  0  ""   false  null undefined 
// truthy Values : 1 "k" " " true [] {} function(){}

// Null Coalesce ??

const name = null ?? undefined ?? "Lina" ?? "Kirti"   //api db
console.log(name);

const user = {
    isLoggedIn : true,
    mailId : "g@chatgpt.in"
}
if(Object.keys(user)) console.log(`${user.mailId} is present : ${user.isLoggedIn}`);
