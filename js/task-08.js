const form = document.querySelector('.login-form');

const formValidation = event => {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    return alert('Для завершення реєстрації, заповни усі поля.');
  }

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  console.log(
    `${email.name}: ${email.value}
    ${password.name}: ${password.value} `
  );

  event.currentTarget.reset();
};

form.addEventListener('submit', formValidation);
