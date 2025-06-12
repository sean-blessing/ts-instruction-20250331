import { Actor } from "./actor";

console.log("Welcome to the movie app!");
let a: Actor = new Actor(1, "Johnny", "Depp", new Date(1963, 5, 9), "Male");

console.log("actor id: " + a.id);

console.log(a.toString());

console.log("Bye");
