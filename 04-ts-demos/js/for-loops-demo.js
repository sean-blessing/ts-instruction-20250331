"use strict";
console.log("Welcome to the Loops Demo");
let fruits = ['orange', 'apple', 'kiwi'];
fruits.push('banana');
// iterate through array, I don't care about position/index
console.log("List of Fruits:");
for (let fruit of fruits) {
    console.log(fruit);
}
let numbers1 = [45, 38, 2, 67, 23, 11];
// iterate through numbers1 backwards
// indexed / traditional for loop
for (let i = numbers1.length - 1; i >= 0; i--) {
    console.log(numbers1[i]);
}
console.log("Bye");
