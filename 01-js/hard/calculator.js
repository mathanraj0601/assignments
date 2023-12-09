/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Can divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const cleanedExpression = expression.replace(/\s+/g, "");
    const isMatch = cleanedExpression.match(/^[\d\+\*\-\/\(\)\.]+$/);
    if (!isMatch) {
      throw new Error("Invalid Character");
    }
    try {
      let final = eval(cleanedExpression);
      if (final === Infinity) {
        throw new Error("Divide by zero");
      }
      this.result = final;
    } catch (error) {
      throw new Error("Invalid Paranthesis");
    }
    // if(!cleanedExpression.test(/^[\d\+\*\-\/\(\)\.]+$/))
    // return eval(e)
    // let stack = [];
    // let element = expression.split("");
    // for (let i = 0; i < element.length; i++) {
    //   if (element[i] === ")") {
    //   }
    //   if (element[i] === " " || element[i] === "") continue;
    //   if (
    //     element[i] === "+" ||
    //     element[i] === "-" ||
    //     element[i] === "*" ||
    //     element[i] === " " ||
    //     element[i] === "("
    //   ) {
    //     stack.push(element[i]);
    //     continue;
    //   }
    //   if (Number(element[i])) {
    //     let temp = "";
    //     while (Number(element[i])) {
    //       temp += element[i];
    //       i++;
    //     }
    //     i--;
    //     stack.push(Number(temp));
    //     continue;
    //   } else {
    //     throw new Error("Invalid character");
    //   }
    // }
    // console.log(stack, "stack");
    // if (stack.length > 0) throw new Error("Invalid Paranthesis");
    // console.log(element, "element");
  }
}

module.exports = Calculator;
