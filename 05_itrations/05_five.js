// const coding = ["js","ruby","cpp","swift","python"];

// coding.forEach((value) =>{
//     console.log(value);
// })



const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num) => num > 4 )
// console.log(newNums);

// const newNums = myNums.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
// console.log(newNums);

const myTotal = myNums.reduce((acc,cv) =>{
    return acc + cv;
},0);
console.log(myTotal);