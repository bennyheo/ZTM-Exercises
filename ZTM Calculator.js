// Calculator


var firstNum = prompt("Enter a Number: ");
var calSymbol = prompt ("+ - / *");
var secondNum = prompt("Enter another number: ");

firstNum = Number(firstNum);
secondNum = Number(secondNum);

alert(multiply(firstNum, secondNum));

alert(eval(firstNum + calSymbol + secondNum));