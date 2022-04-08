const buttons = document.querySelectorAll(".button");
const display = document.getElementById("display");

let equation = [];

function handleButtonClick(e) {
  const current = e.target.innerHTML;
  if (current === "AC") {
    // delete
    equation = [];
  } else if (current === "=") {
    // equals
    const answer = eval(equation.join(""));
    equation = [answer];
  } else {
    let newInput;
    if (e.target.classList[0] === "operator") {
      const last = equation[equation.length - 1];
      if (
        last === "+" ||
        last === "-" ||
        last === "/" ||
        last === "*" ||
        equation.length <= 0
      ) {
        // do nothing
      } else {
        switch (e.target.innerHTML) {
          case "÷":
            newInput = "/";
            break;
          case "×":
            newInput = "*";
            break;
          case "-":
            newInput = "-";
            break;
          case "+":
            newInput = "+";
            break;
        }
        equation.push(newInput);
      }
    } else if (e.target.classList[0] === "operand") {
      newInput = e.target.innerHTML;
      equation.push(newInput);
    }
  }
  display.innerHTML = equation.join("");
}

buttons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);
