const user = {
    username : "waqar",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}


// user.welcomeMessage();

// user.username = "sam";
// user.welcomeMessage();

const addTwo = (num1,num2) => {
    return num1 + num2;
}
// console.log(addTwo(3 ,5));