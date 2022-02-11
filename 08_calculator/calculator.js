const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
	let result = a - b;
  return result;
};

const sum = function(numbers) {
	let result = 0;
  if(numbers.length == 0) return 0;
  numbers.forEach(number => result += number);
  return result;
};

const multiply = function(numbers) {
  let result = 1;
  numbers.forEach(number => result *= number);
  return result;
};

const power = function(a, b) {
	let result = a ** b;
  return result
};

const factorial = function(num) {
  let result = 1;
  if(num == 0) return 1;
  for(let i=1; i<= num; i++) result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
