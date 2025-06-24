//first create promise

const getUserInfo = new  Promise(
    function(resolve , reject){
        setTimeout(() => {
            console.log('send the request');
            let error = false;
            if(error){
                resolve();
            }else{
reject();
            }
        }, 2000);
    
    }
)
getUserInfo.then(function(){
    console.log("Prommise Resolved");
    
}).catch(function(){
    console.log("Promise Rejected");
    
})

//
new Promise(function(resolve,reject){
    //some code
}).catch(function(){}).
then(function(){})

//
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Yes you are insidePromise");
        resolve({username : "Kirti", id : "princess@divine.com"})
        
    },2000)
})

promiseThree.then((user)=>{
console.log(user);

})