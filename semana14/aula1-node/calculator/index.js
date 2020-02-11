// calculator for dummies

// how to use:
// $ node calculator.js [operator] [first number] [second number]

// operators (case insensitive):
// a - addition
// s - substraction
// m - multiplication
// d - division

// numbers:
// numbers of your choice :)



const operator = process.argv[2].toUpperCase();
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);
const answer = "A resposta é";
const red = '\033[0;31m';

switch (operator) {
  case "A":
    console.log(answer, firstNumber + secondNumber);
    break;
  case "S":
    console.log(answer, firstNumber - secondNumber);
    break;
  case "M":
    console.log(answer, firstNumber * secondNumber);
    break;
  case "D":
    console.log(answer, firstNumber / secondNumber);
    break;
  default:
    console.log(red + ("Error"));
}