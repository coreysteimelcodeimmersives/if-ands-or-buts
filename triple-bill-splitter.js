const prompt = require('prompt-sync')();

let person1 = Number(prompt("Enter how much Person 1 paid: $"));

let person2 = Number(prompt("Enter how much Person 2 paid: $"));

let person3 = Number(prompt("Enter how much Person 3 paid: $"));

let bill = person1 + person2 + person3;

let evenSplit = bill / 3;

let remainder = bill % 3;

let remainder1 = bill - 1;

let remainder2 = bill - 2;

if (remainder === 0){
    let person1owes = evenSplit - person1;
    let person2owes = evenSplit - person2;
    let person3owes = evenSplit - person3;
    if (evenSplit === person1 && evenSplit === person2 && evenSplit === person3){
        console.log("Congratulations, you all split the bill evenly.");
    } else if (person1 > person2 && person1 > person3){
        console.log("Person 2 owes Person 1: $" + person2owes + " and Person 3 owes Person 1: $" + person3owes);
    } else if (person2 > person1 && person2 > person3){
        console.log("Person 1 owes Person 2: $" + person1owes + " and Person 3 owes Person 2: $" + person3owes);
    } else if (person3 > person1 && person3 > person2){
        console.log("Person 1 owes Person 3: $" + person1owes + " and Person 2 owes Person 3: $" + person2owes);
    }
} else if (remainder === 1){
    evenSplit = (remainder1/3) + .5;
    let person1owes = evenSplit - person1;
    let person2owes = evenSplit - person2;
    let person3owes = evenSplit - person3;
    if (person1 > person2 && person1 > person3){
        console.log("Because Person 1 paid more, he keeps the extra dollar. Person 2 owes Person 1: $" + person2owes + " and Person 3 owes Person 1: $" + person3owes);
    } else if ( person2 > person1 && person2 > person3){
        console.log("Because Person 2 paid more, he keeps the extra dollar. Person 1 owes Person 2: $" + person1owes + " and Person 3 owes Person 2: $" + person3owes);
    } else if (person3 > person1 && person3 > person2){
        console.log("Because Person 3 paid more, he keeps the extra dollar. Person 1 owes Person 3: $" + person1owes + " and Person 2 owes Person 3: $" + person2owes);
    }
} else if (remainder === 2){
    evenSplit = (remainder2/3) + 1;
    let person1owes = evenSplit - person1;
    let person2owes = evenSplit - person2;
    let person3owes = evenSplit - person3;
    if (person1 > person2 && person1 > person3){
        console.log("Because Person 1 paid more, he keeps the extra dollar. Person 2 owes Person 1: $" + person2owes + " and Person 3 owes Person 1: $" + person3owes);
    } else if ( person2 > person1 && person2 > person3){
        console.log("Because Person 2 paid more, he keeps the extra dollar. Person 1 owes Person 2: $" + person1owes + " and Person 3 owes Person 2: $" + person3owes);
    } else if (person3 > person1 && person3 > person2){
        console.log("Person 1 owes Person 3: $" + person1owes + " and Person 2 owes Person 3: $" + person2owes);
    }
}