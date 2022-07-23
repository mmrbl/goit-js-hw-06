const size = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const resize = (event) => {
  const newSize = event.currentTarget.value;
  text.style.fontSize = `${newSize}px`;
};

size.addEventListener("input", resize);
