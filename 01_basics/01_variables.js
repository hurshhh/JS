const accountId = 144553
let accountEmail = "Harsh123@gmail.com"
var accountPwd = "123456"
accountCity = "Udaipur"
let accountState;

accountEmail = "ac@ac.com"
accountPwd = "23422345"
accountCity = "Bengaluru"
console.log(accountId);
/*
Prefer not to use var bcoz of issue 
in block and functional scope
*/

console.table([accountId, accountEmail, accountPwd, accountCity,accountState])