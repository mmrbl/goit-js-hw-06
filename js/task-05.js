const input = document.querySelector('input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', () => {
  nameOutput.textContent = input.value;
  if (input.value.trim() == '') {
    nameOutput.textContent = 'Anonymous';
  }
});
