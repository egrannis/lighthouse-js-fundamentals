const howManyHundreds = function (bottles) {
  return (bottles - (bottles % 100)) / 100
};
console.log(howManyHundreds(520));


/* could also do math.floor
let howManyHundreds = function (bottles){
  return Math.floor(bottles / 100)
}; */
