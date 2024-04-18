
const swap =() => {
const names = ["Abhi", "Ram", "Jinu", "Priya", "Anju", "Tinu"];

console.log("Before swapping:");
console.log("names:", names);

[names[0], names[names.length - 1]] = [names[names.length - 1], names[0]];

console.log("After swapping:");
console.log("names:", names);
}
swap();
