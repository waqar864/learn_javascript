//singleton
//object.create


//object lierals
const mySym = Symbol("key1");//symbol always use in square brackets
const JsUser = {
    name: "waqar",
    "full name": "Waqar Khan",
    [mySym]:"mykey1",
    age: 31,
    location:"Gujranwala",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoggedIn:["monday","saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "waqarkhan@gmail.com";
//Object.freeze(JsUser); // this is used for not overwrite or change the object
console.log(JsUser);

JsUser.greetings = function(){
    console.log("hello js user")
}
JsUser.greetings2 = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(JsUser.greetings());
console.log(JsUser.greetings2());