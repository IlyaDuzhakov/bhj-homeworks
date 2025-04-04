const titlePoll = document.querySelector("#poll__title");
const container = document.querySelector("#poll__answers");
const request = new XMLHttpRequest();
request.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
request.send();

const clickBtn = () => {
  const btns = document.querySelectorAll(".poll__answer");
  for (let q = 0; q < btns.length; q = q + 1) {
    btns[q].addEventListener("click", () => {
      alert("Спасибо, ваш голос засчитан!");
    });
  }
};

request.addEventListener("load", () => {
  const info = JSON.parse(request.response); // то, что показывает программа тип string не значит, что нужно ставить кавычки. Это значит, что переданные данные должны быть тип string
  // JSON.parse  строку преобразует в объект или массив
  // JSON.stringify  объект или массив преобразует в строку БЕЗ потери данных
  // console.log(typeof request.response) // string
  const title = info.data.title;
  const answers = info.data.answers;
  titlePoll.innerHTML = title;
  for (let i = 0; i < answers.length; i = i + 1) {
    const btn = ` <button class="poll__answer">
              ${answers[i]}
            </button>`;
    container.insertAdjacentHTML("afterbegin", btn); // insertAdjacentHTML - добавляем html разметку внутрь другого html элемента
  }
  clickBtn() // вынесли логику клика по кнопкам в отдельную функцию. Вызывается функция один раз после цикла. Нам важно, чтобы к моменту вызова функции уже были созданы все кнопки.
  // innerHTML - есть у тех элементов у которых есть и открывающий и закрывающий тег. И ему мы всегда присваем значение
  // console.log(title, answers)
});
