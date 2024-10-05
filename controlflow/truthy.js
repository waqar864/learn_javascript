const userEmail = "abc@gmail.com";

if(userEmail){
    console.log("got user email");
}else {
    console.log("don't have user email")
}

// falsy values
// false , 0 , -0 , BigInt 0n, "", null , undefined, NAN

//truthy values
// "0", 'false', " ", [], {}, function(){}


//nullish coalescing opratie (??) : null undefined


let val1;
val1 = 5 ?? 10;

// console.log(val1);

val1 = null ?? 10;
// console.log(val1);

//ternary oprator 

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");