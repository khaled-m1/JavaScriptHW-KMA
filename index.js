// Calculate area of a rectangle
let length = 5;
let width = 5;
function area(length, width) {
  return length * width;
}
console.log("_________rectangle____________");
console.log("The area of the rectangle is: " + area(length, width));
// The Temperature Converter
function fahrenheit(fahrenheit) {
  let fahrenheitTemp = fahrenheit;
  let fahrenheitToCelsius = ((fahrenheitTemp - 32) * 5) / 9;
  let msg = fahrenheitTemp + "F is " + fahrenheitToCelsius + "C";
  console.log(msg);
}
console.log("_________Temperature____________");
function celsius(celsius) {
  let celsiusTemp = celsius;
  let CelsiusTofahrenheit = (celsiusTemp * 9) / 5 + 32;
  let msg = celsiusTemp + "C is " + CelsiusTofahrenheit + "F";
  console.log(msg);
}
celsius(20);
fahrenheit(20);
console.log("__________summations___________");
// Numbers' summations
let Numbers = [23, 54, 32, 87, 47];
let total = 0;
for (let i = 0; i < Numbers.length; i++) {
  total += Numbers[i];
  console.log(total);
}
console.log("_________Maximum____________");
// Maximum number
let Maximum = [16, 4, 2, 0, 19, 6];
let max_of_array = Math.max.apply(Math, Maximum);
console.log(max_of_array);
console.log("__________Reverse___________");
//Reverse Array
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversed = arrNum.reverse();
console.log("reversed:", reversed);
console.log("__________stars pattern___________");
//stars pattern
let star = 5;
let string = "";
for (let i = 0; i < star; i++) {
  for (let k = 0; k <= i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
