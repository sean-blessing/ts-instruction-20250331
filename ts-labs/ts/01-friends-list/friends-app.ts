import { Friend } from "./friend";

console.log("Welcome to the Friends List!");

let friends: Friend[] = [
    new Friend("Bob Marley", 81, "bob@onelove.com", true),
    new Friend("Adam Sandler", 52, "happy@madison.com", false),
    new Friend("Steve Martin", 83, "navin.r.johnson@thejerk.com", false),
    new Friend("Anna Farris", 32, "anna@farris.com", true),
    new Friend("Julie Bowen", 49, "julie@bowen.com", true)
];

// determine column lengths: Name (25), Age(5), Email(30), BFF - none
let header: string = "Name".padEnd(25)+"Age".padEnd(5)+"Email".padEnd(30)+"BFF";
console.log(header);
for (let friend of friends) {
    let line: string = friend.name.padEnd(25)+friend.age.toString().padEnd(5)+friend.email.padEnd(30);
    line += (friend.bff) ? "Yes" : "No";
    console.log(line);
}

console.log("Bye");