// //const tinderUser = new Object();
// const tinderUser = {};


// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser = {
//     email: "waqar@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname: "waqar",
//             lstname:"khan"
//         }
//     }
// }

// // console.log(regularUser.fullname?.userfullname.firstname);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

// const obj3 = Object.assign({},obj1,obj2)
// // ... is a spread oprater 
// const obj4 = {...obj1,...obj2}


// console.log(obj4)

const course = {
    coursename: "js in urdu",
    price: "999",
    courseInstructer: "Waqar"
}

const {courseInstructer: instructer} = course;

console.log(instructer);