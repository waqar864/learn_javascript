class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(newPassword){
        this._password = newPassword
    }
}

const waqar = new User("waqar khan", "abc")
console.log(waqar);