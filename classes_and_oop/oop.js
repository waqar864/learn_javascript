// object literals

const user = {
    username: "waqar",
    loginCount: 8,
    signedIn :true,

    getUserDetails: function(){
        // console.log("Got User Details");
        console.log(`username: ${this.username}, loginCount: ${this.loginCount}, signedIn: ${this.signedIn}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

//constructer functio
// new is used for constructer
// empty object is created when we use new

function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    return this
}

const UserOne = new User("waqar khan", 8, true);
const UserTwo = new User("User 2", 11, false);

console.log(UserTwo);