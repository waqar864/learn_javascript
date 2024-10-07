class User {
    constructor(username){
        this.username = username;

    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const waqar = new User("waqar khan");
// console.log(waqar.createId())

class Teacher extends User{
    constructor(email, username){
        super(username);
        this.email = email
    }
}

const iphone = new Teacher("abc@gmail", "iphone");

iphone.logMe();