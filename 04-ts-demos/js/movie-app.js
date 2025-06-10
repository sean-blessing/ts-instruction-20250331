"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actor_1 = require("./actor");
console.log("Welcome to the movie app!");
let a = new actor_1.Actor(1, "Johnny", "Depp", new Date(1963, 5, 9), 'Male');
console.log(a.toString());
console.log("Bye");
