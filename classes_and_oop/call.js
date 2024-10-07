function SetUsername(username){
    this.username = username
}

function createUser(username,email,password){
    SetUsername.call(this ,username) // call is used for current execution content
    // this.username = username
    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@gmail","123")
console.log(chai)