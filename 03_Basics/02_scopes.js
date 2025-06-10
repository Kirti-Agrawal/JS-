//let var const  - DOM

if (true){  
    let a =10;
    const b = 20;
    var c = 30;
}

// console.log(a);  //block scope
// console.log(b);
console.log(c); // global scope

function one(){
const userOne = "Kirti";

function two(){
const website = "youtube";
console.log(userOne);    //Closures

}
two();
// console.log(website);

}
one();


if(true){
    const userNAme = "Kirti";
    if(userNAme == "Kirti"){
        const website = "youtube";
        console.log(userNAme + website);
        
    }
    // console.log(website);
    
}
// console.log(userNAme);

// +++++++++++++++++++++++++++++++Interesting +++++++++++++++++++++++++++

def();
function def(){

}

// funcExp();
const funcExp = function(){
    //whole function given to one variable = function expression
}