//ES6

class User {
    constructor(username, email, paswword){
        this.username = username;
        this.email = email;
        this.paswword = paswword;
    }

    encryptedPassword(){
        return `${this.paswword} is encrypted`
    }
}

const chai = new User("Chai", "chai@gmail","123")
// console.log(chai)
console.log(chai.encryptedPassword());