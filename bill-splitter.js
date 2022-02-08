const prompt = require('prompt-sync')();

let person1 = Number(prompt("Enter how much Person 1 paid: $"));

let person2 = Number(prompt("Enter how much Person 2 paid: $"));

let bill = person1 + person2;

let evenSplit = bill / 2;

if (evenSplit === person1 && evenSplit === person2){
    console.log("Congratulations, you both split the bill evenly.");
} else if (person1 > evenSplit) {
    // person 1 paid more
    // subtract p1 - es = how much p2 owes p1
    let owe = person1 - evenSplit;
    console.log("Person 2 owes Person 1: $" + owe);
} else {
    let owe = person2 - evenSplit;
    console.log("Person 1 owes Person 2: $" + owe)
}

