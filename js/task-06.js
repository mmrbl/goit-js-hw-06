const input = document.querySelector("#validation-input");

const setBorder = (event) => {
  const userTyped = event.currentTarget.value.length;
  const correctSymbols = Number(input.getAttribute("data-length"));
  if (userTyped !== correctSymbols) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
};

input.addEventListener("blur", setBorder);
