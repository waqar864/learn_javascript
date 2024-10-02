let myDate = new Date();
// console.log(myDate.toDateString());

let myCreatedDate = new Date(2024, 2 , 24);
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp)
const newDate = new Date();

newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate);