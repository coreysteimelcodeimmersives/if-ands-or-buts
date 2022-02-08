const prompt = require('prompt-sync')();

const pinCode = '1234';

let passcode = prompt("Please enter your passcode: ");

if (passcode === pinCode){
    console.log("success")
} else {
    console.log("failure");
}