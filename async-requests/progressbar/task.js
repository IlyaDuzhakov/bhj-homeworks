// Загрузите форму через AJAX по адресу https://students.netoservices.ru/nestjs-backend/upload
// Отслеживайте событие изменения загрузки и в соответствии с ним корректируйте прогресс
// Важно Если отправка формы будет реализована неверно, вы можете получить ошибку от сервера.

const progressBar = document.querySelector("#progress");
const form = document.querySelector("#form"); // не используем без необходимости глаголы в названии переменных
const inputFile = document.querySelector("#file");

const sentFile = function (fail) {
  const request = new XMLHttpRequest();
  const info = new FormData(); // после new чаще всего название объекта с большой буквы
  // FormData() - объект для отправки данных на сервер
  info.append("file", fail); // добавляем полученный файл в наш объект
  // request.upload // загрузка запроса
  request.upload.addEventListener("progress", (event) => {
    // у объекта загрузки запроса отслеживаем прогресс
    if (event.lengthComputable === true) {
      // lengthComputable определяет, можем ли мы посчитать размер загружаемого файла
      const persent = (event.loaded * 100) / event.total / 100; // event.loaded - сколько загруженно на данный момент
      // event.total  - общий вес файла
      progressBar.value = persent; // progressBar - тэг progress в HTML в который мы передаем процент загрузки
    }
  });
  request.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/upload"
  );
  request.send(info);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const file = inputFile.files[0]; // доступ к тем файлам, которые мы загрузили
  sentFile(file);
});
