const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
let isEvaluated = false;

buttons.forEach((button) => {
  button.onclick = () => {
    if (button.id == "clear") {
      display.innerText = "";
      isEvaluated = false;
    } else if (button.id == "backspace") {
      if (isEvaluated) {
        display.innerText = "";
        isEvaluated = false;
      } else {
        let text = display.innerText.toString();
        display.innerText = text.substr(0, text.length - 1);
      }
    } else if (button.id == "equal") {
      if (display.innerText != "") {
        try {
          display.innerText = eval(display.innerText);
          isEvaluated = true;
        } catch {
          display.innerText = "Error";
          setTimeout(() => (display.innerText = ""), 2000);
        }
      } else {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      if (isEvaluated) {
        display.innerText = "";
        isEvaluated = false;
      }
      display.innerText += button.innerText;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = localStorage.getItem("isDark") === "true";

const setTheme = (dark) => {
  if (dark) {
    calculator.classList.add("dark");
    themeToggleBtn.classList.add("active");
  } else {
    calculator.classList.remove("dark");
    themeToggleBtn.classList.remove("active");
  }
};

themeToggleBtn.onclick = () => {
  isDark = !isDark;
  setTheme(isDark);
  localStorage.setItem("isDark", isDark);
};

setTheme(isDark);
