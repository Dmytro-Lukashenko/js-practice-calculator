class Calculator {
  firstValue = 0;
  secondValue = 0;
  result = 0;
  method = "";
  constructor() {}
  clear() {
    this.firstValue = 0;
    this.result = 0;
    this.method = "";
    this.secondValue = 0;
  }
  add() {
    this.method = "addition";
    this.result = +this.firstValue + +this.secondValue;
    return this.result;
  }
  subtraсt() {
    this.method = "substraction";
    this.result = this.firstValue - this.secondValue;
    return this.result;
  }
  multiple() {
    this.method = "multiplication";
    this.result = this.firstValue * this.secondValue;
    return this.result;
  }
  divide() {
    this.method = "division";
    this.result = this.firstValue / this.secondValue;
    return this.result;
  }
}

const buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let equal = document.getElementById("equal");
let value = document.getElementById("value");
let clear = document.getElementById("clear");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

const calculator = new Calculator();

value.innerHTML = calculator.firstValue;
const calcClear = () => {
  calculator.clear();
  value.innerHTML = calculator.firstValue;
  console.log(calculator);
};
const calcEqual = () => {
  switch (calculator.method) {
    case "addition":
      value.innerHTML = calculator.add();
      calculator.method = "";
      calculator.firstValue = calculator.result;
      calculator.secondValue = 0;
      console.log(calculator);
      break;
    case "subtraction":
      value.innerHTML = calculator.subtraсt();
      calculator.method = "";
      calculator.firstValue = calculator.result;
      calculator.secondValue = 0;
      console.log(calculator);
      break;
    case "multiplication":
      value.innerHTML = calculator.multiple();
      calculator.method = "";
      calculator.firstValue = calculator.result;
      calculator.secondValue = 0;
      console.log(calculator);
      break;
    case "division":
      value.innerHTML = calculator.divide();
      calculator.method = "";
      calculator.firstValue = calculator.result;
      calculator.secondValue = 0;
      console.log(calculator);
      break;
    default:
      console.log("Sorry, we don't have such functionnality");
  }
};

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (this.innerHTML === "Clear") {
      calcClear();
    } else if (this.innerHTML === "=") {
      calcEqual();
    } else if (this.innerHTML === "+") {
      calculator.method = "addition";
    } else if (this.innerHTML === "-") {
      calculator.method = "subtraction";
    } else if (this.innerHTML === "*") {
      calculator.method = "multiplication";
    } else if (this.innerHTML === "/") {
      calculator.method = "division";
    } else {
      if (calculator.method === "") {
        value.innerHtml = calculator.firstValue;
        if (calculator.firstValue === 0) {
          value.innerHTML = this.innerHTML;
          calculator.firstValue = this.innerHTML;
          return;
        }
        value.innerHTML += this.innerHTML;
        calculator.firstValue += this.innerHTML;
      } else {
        value.innerHtml = calculator.secondValue;
        if (calculator.secondValue === 0) {
          value.innerHTML = this.innerHTML;
          calculator.secondValue = this.innerHTML;
          return;
        }
        value.innerHTML += this.innerHTML;
        calculator.secondValue += this.innerHTML;
      }
    }
  });
}

toggleBtn.onclick = function () {
  body.classList.toggle("dark");
};
