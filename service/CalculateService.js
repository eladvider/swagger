"use strict";

/**
 * Perform arithmetic operations on two numbers
 *
 * body Operator
 * returns inline_response_200_1
 **/
exports.calculate = function (body) {
  return new Promise(function (resolve, reject) {
    const { num1, num2, operation } = body;
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operation. Please use one of: +, -, *, /");
    }
    resolve({ result });
  });
};
