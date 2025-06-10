"use strict";
console.log("Welcome to TS Types!");
// numbers p. 18
let price = 19.99;
let qty = 5;
let total = price * qty;
console.log(`Total = ${total}`);
// boolean p. 20
let success = false;
if (!success) {
    console.log('not successful!');
}
// 'truthy' evaluations
if (total) {
    console.log('total has a value');
}
// object type p. 21
let movie = {
    id: 1,
    title: "Finding Nemo",
    year: 2003
};
console.log(movie);
// p. 22 Array type
let numbers = [1, 2, 3, 4, 5, 6, 7];
let names = ['Bob', 'Jenny', 'Kurt', 'Sue'];
// looping
// traditional for loop w/ index
for (let i = 0; i < names.length; i++) {
    console.log(`${i}: ${names[i]}`);
}
// for .. of (similar to a for-each loop)
for (let nbr in numbers) {
    console.log(nbr);
}
// for .. in loop
for (let n in names) {
    console.log(`${n}: ${names[n]}`);
}
// for .. in of an object
// for (let key in movie) {
//     console.log(`${key}: ${movie[key]}`)
// }
// create a Map
let statesMap = new Map();
statesMap.set('OH', 'Ohio');
statesMap.set('IN', 'Indiana');
statesMap.set('CO', 'Colorado');
//console.log(statesMap);
// for .. in doesn't work with maps
for (let [state, stateName] of statesMap) {
    console.log(`${state}: ${stateName}`);
}
console.log("Bye");
