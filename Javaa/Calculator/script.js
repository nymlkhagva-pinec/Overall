const container = document.getElementById("container");
const input = document.getElementById("input");
const buttons = document.getElementById("buttons");
const numbers = [
  "⌫",
  "AC",
  "...",
  "÷",
  7,
  8,
  9,
  "x",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  "...",
  0,
  ".",
  "=",
];
const value = input.value;

numbers.map((num) => {
  const newBtn = document.createElement("button");
  newBtn.style.width = "100px";
  newBtn.style.height = "80px";
  newBtn.textContent = num;
  newBtn.style.fontSize = "30px";

  newBtn.addEventListener("click", function () {
    if (num === "AC") {
      input.value = "";
    } else if (num === "...") {
      return;
    } else if (num === "⌫") {
      const backspace = input.value.slice(0, input.value.length - 1);
      input.value = backspace;
    } else if (num === "=") {
      tentsuuu();
    } else if (
      (num === "+" || num === "x" || num === "-" || num === "÷") &&
      (input.value[input.value.length - 1] === "x" ||
        input.value[input.value.length - 1] === "-" ||
        input.value[input.value.length - 1] === "+" ||
        input.value[input.value.length - 1] === "÷")
    ) {
      input.value = input.value.slice(0, -1) + num;
    } else {
      input.value += num;
    }
  });
  buttons.appendChild(newBtn);
});
function tentsuuu() {
  const values = input.value.match(/(\d+\.?\d*|[\+\-\x\÷])/g);

  let result = 0;

  let i = 0;
  while (i < values.length) {
    if (values[i] === "x" || values[i] === "÷") {
      if (values[i] === "x") {
        result = Number(values[i - 1]) * Number(values[i + 1]);
        values.splice(i - 1, 3, result);
        input.value = result;
      } else if (values[i] === "÷") {
        result = Number(values[i - 1]) / Number(values[i + 1]);
        values.splice(i - 1, 3, result);
        input.value = result;
        i--;
      }
    } else {
      i++;
    }
  }
  let third = Number(values[0]);
  // let third = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] === "+") {
      third += Number(values[i + 1]);
      input.value = third;
    } else if (values[i] === "-") {
      third -= Number(values[i + 1]);
      input.value = third;
    }
  }
}
