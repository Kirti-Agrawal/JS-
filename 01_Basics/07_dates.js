//Dates

let todayDate = new Date();
console.log(todayDate);
console.log(` toDateString : ${todayDate.toDateString()}`);
console.log(` toISOString : ${todayDate.toISOString()}`);
console.log(` toJSON : ${todayDate.toJSON()}`);
console.log(` toLocaleString : ${todayDate.toLocaleString()}`);
console.log(` toLocaleDateString : ${todayDate.toLocaleDateString()}`);
console.log(` toTimeString : ${todayDate.toTimeString()}`);
console.log(` getDate : ${todayDate.getDate()}`);
console.log(` getMonth : ${todayDate.getMonth()+1}`);
console.log(` getUTCDate : ${todayDate.getUTCDate()}`);
console.log(` getDay : ${todayDate.getDay()}`);
console.log(` getHours : ${todayDate.getHours()}`);
console.log(` getSeconds : ${Math.floor(todayDate.getTime()/1000)}`);

console.log(typeof Date);

let currentDate = Date.now();
console.log(currentDate);

currentDate.toLocaleString('default', {
    weekday : "long"
})
console.log(currentDate);

let myCreatedDate = new Date("01-03-2025");
let myCreatedDate2 = new Date(2025,3,3);
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate2.toLocaleString());

console.log(currentDate - myCreatedDate.getTime()); // 6thJune2025 - 3rdMarch2025


