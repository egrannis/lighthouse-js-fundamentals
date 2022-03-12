/* const sayHello  = function () {
  console.log("Hello, world");
}

sayHello(); */
// commented out above for second function expression to work properly

const sayHello  = function (name) {
  console.log("Hello, " + name);
};
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

// console log example below
const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

//return example below
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

// return statement with console log afterward
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);