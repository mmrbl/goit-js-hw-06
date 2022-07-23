const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (inputName) => {
  output.textContent = inputName.currentTarget.value;
  if (inputName.currentTarget.value === "") {
    output.textContent = "Anonymous";
  }
});
