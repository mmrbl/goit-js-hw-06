const form = document.querySelector('.login-form');

const formValidation = event => {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    return alert('Для завершення реєстрації, заповни усі поля.');
  }

  console.log(
    `${event.currentTarget.elements.email.name}: ${event.currentTarget.elements.email.value}, ${event.currentTarget.elements.password.name}: ${event.currentTarget.elements.password.value} `
  );

  event.currentTarget.reset();
};

form.addEventListener('submit', formValidation);
