var add = function(number1, number2) {
  return alert(number1 + number2);
};

var multiply = function(number1, number2) {
  return alert(number1 * number2);
};

var subtract = function(number1, number2) {
  return alert(number1 - number2);
};

var divide = function(number1, number2) {
  return alert(number1 / number2);
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var calculator= prompt("what would you like to do: Type multiply, add, subtract, or divide");

if (calculator.toLowerCase() === "add" ){
  add(number1, number2);
}
else if (calculator.toLowerCase() === "multiply" ){
  multiply(number1, number2);
}
else if (calculator.toLowerCase() === "subtract" ){
  subtract(number1, number2);
}
else if (calculator.toLowerCase() === "divide" ){
  divide(number1, number2);
}
else {
  alert("please type the right thing")
}
