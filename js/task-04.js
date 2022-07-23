// 1) Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2) Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3) Оновлюй інтерфейс новим значенням змінної counterValue.

const decrement = document.querySelector(`[data-action="decrement"]`);
const increment = document.querySelector(`[data-action="increment"]`);
const counter = document.querySelector(`#value`);

let counterValue = 0;

const onDecrementButtonClick = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
decrement.addEventListener("click", onDecrementButtonClick);

const onIncrementButtonClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
increment.addEventListener("click", onIncrementButtonClick);
