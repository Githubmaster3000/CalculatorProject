let num1 = "";
let num2 = "";
let operator = null;
let result = 0;

const keyjs = document.querySelectorAll(".key");

function isNumeric(value1) {
  return /^-?\d+$/.test(value1);
}

keyjs.forEach((buttonhtml) => {
  buttonhtml.addEventListener("click", () => {
    const value = buttonhtml.textContent;
    if (isNumeric(value) || value === ".") {
      if (operator === null) {
        num1 += value;
        document.querySelector(".display-bar").textContent = num1;
      } else {
        num2 += value;
        document.querySelector(".display-bar").textContent = num2;
      }
    } else {
      if (value === "+" || value === "-" || value === "x" || value === "/") {
        operator = value;
        document.querySelector(".display-bar").textContent = operator;
      }
      if (value === "=") {
        num2 = parseFloat(num2);
        num1 = parseFloat(num1);
        if (operator === "+") {
          result = num1 + num2;
          document.querySelector(".display-bar").textContent = result;
        }
        if (operator === "-") {
          result = num1 - num2;
          document.querySelector(".display-bar").textContent = result;
        }
        if (operator === "x") {
          result = num1 * num2;
          document.querySelector(".display-bar").textContent = result;
        }
        if (operator === "/") {
          result = num1 / num2;
          document.querySelector(".display-bar").textContent = result;
        }
        operator = null;
        num1 = "";
        num2 = "";
      }

      if (value === "c") {
        num1 = "";
        num2 = "";
        operator = null;
        result = 0;
        document.querySelector(".display-bar").textContent = result;
      }



    }
  });
});

// to do an operation, we need to do these steps:

// Set the first number
// Set the operator (via the +, -, x, / buttons)
// Set the second number
// Tell the calculator to calculate (via the = button)

// note: foreach: adding a listener to each button in the DOM

//note: operator = null => num1 ; operator = value => num2

//
