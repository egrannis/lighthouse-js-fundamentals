// commented out the below to allow for simplified code
/* const isEven  = function (num) {
  return num % 2 === 0;
}
 const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven); */ 

//Simplified code is below where we don't need to set function return values to new variables
const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));