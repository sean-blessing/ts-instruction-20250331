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
console.log("Name\t\tAge\tEmail\t\t\tBFF");
for (let friend of friends) {
    let line = `${friend.name}\t${friend.age}\t${friend.email}\t\t\t`;
    line += (friend.bff) ? "Yes" : "No";
    console.log(line);
}
console.log("Bye");
