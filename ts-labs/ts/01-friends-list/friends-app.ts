import { Friend } from "./friend";

console.log("Welcome to the Friends List!");

let friends: Friend[] = [
    new Friend("Bob Marley", 81, "bob@onelove.com", true),
    new Friend("Adam Sandler", 52, "happy@madison.com", false),
    new Friend("Steve Martin", 83, "navin.r.johnson@thejerk.com", false),
    new Friend("Anna Farris", 32, "anna@farris.com", true),
    new Friend("Julie Bowen", 49, "julie@bowen.com", true)
];

console.log("Name\t\tAge\tEmail\t\t\tBFF");
for (let friend of friends) {
    let line: string = `${friend.name}\t${friend.age}\t${friend.email}\t\t\t`;
    line += (friend.bff) ? "Yes" : "No";
    console.log(line);
}

console.log("Bye");