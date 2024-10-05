function sayMyname(){
    console.log("hello world")
}

// sayMyname();

function addTwoNumbers(number1,numbers2){
    // console.log(number1 + numbers2);
    // let result = number1 + numbers2;
    // return result;
    //another way of embeding perameters
    return number1 + numbers2;
}

// const result = addTwoNumbers(4,6);
// console.log(result);

function logginUserMessage(username){
    return `${username} just logged in`;
}

// logginUserMessage("waqar Khan");
// console.log(logginUserMessage("waqar Khan"));

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,600))


