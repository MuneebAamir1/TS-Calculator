import inquirer from "inquirer";

async function calculate() {
  let answers = await inquirer.prompt([
    {
      name: "firstNumber",
      message: "Enter first number",
      type: "number",
    },
    {
      name: "secondNumber",
      message: "Enter second number",
      type: "number",
    },
    {
      name: "operator",
      message: "Select Operator",
      type: "list",
      choices: ["Add", "Subtract", "Multiply", "Divide"],
    },
  ]);

  console.log(answers);

  let result;
  if (answers.operator === "Add") {
    // Addition
    result = answers.firstNumber + answers.secondNumber;
  } else if (answers.operator === "Subtract") {
    // Subtraction
    result = answers.firstNumber - answers.secondNumber;
  } else if (answers.operator === "Multiply") {
    // Multiplication
    result = answers.firstNumber * answers.secondNumber;
  } else if (answers.operator === "Divide") {
    // Division
    result = answers.firstNumber / answers.secondNumber;
  }

  console.log(`Result is ${result}`);
}

calculate();