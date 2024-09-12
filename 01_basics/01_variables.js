const accountId = 1444553;
let accountEmail = 'waqar@example.com';
var accountPassword = '123456';

accountCity="Gujranwala";

//accountId = 2;

//console.log(accountId); not allowed coz of constant variable 
/*

prefer not to use var
because of issue in block scope and functional scope

*/
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity]);



