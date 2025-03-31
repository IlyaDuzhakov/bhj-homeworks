const form = document.querySelector("#signin__form");
const inputLog = document.querySelector("#log");
const inputPassword = document.querySelector("#pas");
const welcome = document.querySelector("#user_id");
const welcomeBlock = document.querySelector("#welcome");
const signinBlock = document.querySelector("#signin");

const showWelcome = function () {
  welcome.innerHTML = localStorage.getItem("id");
  welcomeBlock.classList.add("welcome_active");
  signinBlock.classList.remove("signin_active");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const info = new FormData(form);

  const request = new XMLHttpRequest(); // создание объекта запроса
  request.open("POST", "https://students.netoservices.ru/nestjs-backend/auth"); // подготовка запроса
  request.send(info); // отправка запроса это ассинхронная операция, требующая времени
  request.onload = function () {
    const result = JSON.parse(request.response);

    if (result.success === true) {
      localStorage.setItem("id", result.user_id);
      showWelcome();
    } else {
      alert("Неверный логин/пароль");
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("id")) {
    showWelcome();
  }
});
