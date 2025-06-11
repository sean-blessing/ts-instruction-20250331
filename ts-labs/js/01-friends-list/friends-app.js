"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friend_1 = require("./friend");
console.log("Welcome to the Friends List!");
let friends = [
    new friend_1.Friend("Bob Marley", 81, "bob@onelove.com", true),
    new friend_1.Friend("Adam Sandler", 52, "happy@madison.com", false),
    new friend_1.Friend("Steve Martin", 83, "navin.r.johnson@thejerk.com", false),
    new friend_1.Friend("Anna Farris", 32, "anna@farris.com", true),
    new friend_1.Friend("Julie Bowen", 49, "julie@bowen.com", true)
];
// determine column lengths: Name (25), Age(5), Email(30), BFF - none
let header = "Name".padEnd(25) + "Age".padEnd(5) + "Email".padEnd(30) + "BFF";
console.log(header);
for (let friend of friends) {
    let line = friend.name.padEnd(25) + friend.age.toString().padEnd(5) + friend.email.padEnd(30);
    line += (friend.bff) ? "Yes" : "No";
    console.log(line);
}
console.log("Bye");
