//One more way to create a string

let userName = new String("First User");
console.log(userName);

let imgUrl = "https://www.brahmakumaris.com/bkdrive/all/projects/environment/15078-Eco%20Campigns%20(30x48%20inches)%20(11)";
// console.log(imgUrl.replaceAll("%20"," "));

console.log(imgUrl.lastIndexOf("%20"))

let  count =0;
let position=imgUrl.indexOf("%20");

  
while(  position != -1){
    console.log(++count);
    position = imgUrl.indexOf("%20", position+1);
}

console.log(imgUrl.substring(2,8));
console.log(imgUrl.substring(-67,8));//not consider neg index

console.log(imgUrl.slice(2,8));
console.log(imgUrl.slice(-20,-5));


//substr(first,lastindex)
//slice(first,index)
