"use strict";
let readline = require('readline-sync');
console.log("Welcome");
let firstName = readline.question('What is your name?');
console.log("Hello, " + firstName);
let nbr1 = readline.questionInt("Number? ");
console.log("You entered: " + nbr1);
let nbr2 = readline.questionFloat("Number2? ");
console.log("You entered: " + nbr2);
