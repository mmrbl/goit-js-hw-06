const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (inputName) => {
  output.textContent = inputName.currentTarget.value;
  const countSymbols = inputName.currentTarget.value.length;
  if (countSymbols === 0 || output.textContent === " ") {
    output.textContent = "Anonymous";
  }
});
