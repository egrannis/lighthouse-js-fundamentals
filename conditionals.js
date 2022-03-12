
// second example below (deleted the first example because it conflicted with output, since "cold" had already been declared)
const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
// Third example below
const temperature = -41;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature <15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
// For the program to tell us to pick a scard, temperature needs to be below 0. For short sleeves to be ok, the temperature needs to be 15 or greater
// Part 2, logical operators below
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}
// example 2 part 2
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
// part 2 example 3 below
let raining = false;
if (!raining) {
  console.log("Leave your umbrella at home!");
}