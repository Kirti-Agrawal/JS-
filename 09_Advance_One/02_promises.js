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


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Yes you are insidePromise");
        const error = true;
        if(!error){
            resolve({username : "Kirti", id : "princess@divine.com"})
        }
else{
    reject("Error, Something went Wrong!")
}   
    },2000)
})

// const users = promiseThree.then((user)=>{
// return user;

// })
// .then(function(data){
//     console.log(data);
    
// })
// .catch(function(error){
// console.log(error);

// })
// .finally(function(){
// console.log("It will execute either promise resolved or rejected");

// })

//Other way to handle async operations 

async function consumePromiseThree(){
 try {
     const response =   await promiseThree;
  console.log(response);
 } catch (error) {
    console.log(`Error : ${error}`);
    
 }
  
}
consumePromiseThree();

// fetch().then().catch().finally()

async function consumePromiseFour(){
try {
      const apiUrl = 'https://api.github.com/users/hiteshchoudhary';
    const response = await fetch(apiUrl);
    console.log(await response.json());
} catch (error) {
    console.log(`Error : ${error}`);
    
}
    
}
consumePromiseFour();

