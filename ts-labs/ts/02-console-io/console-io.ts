let readline = require('readline-sync');

console.log("Welcome");

let firstName: string = readline.question('What is your name?');
console.log("Hello, "+firstName);
let nbr1: number = readline.questionInt("Number? ");
console.log("You entered: "+nbr1);
let nbr2: number = readline.questionFloat("Number2? ");
console.log("You entered: "+nbr2);
