
// var c = 300;

// {} curly brases is a scope in a function 

// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// nested scopes

function one (){
    const username = "waqar";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);
    two();
}
one();

console.log(addone(5));
function addone(num){
    return num + 1;
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));

