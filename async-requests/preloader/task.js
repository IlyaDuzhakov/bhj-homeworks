const items = document.querySelector("#items");
const loader = document.querySelector("#loader");

const getRequest = function () {
  // создали функцию со всей логикой отправки запроса.
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
  );
  request.send();
  request.onload = () => {
    const moneyList = JSON.parse(request.response);
    const valuteList = moneyList.response.Valute;

    const values = Object.values(valuteList);
    localStorage.setItem("valutes", JSON.stringify(values)); // values - массив объектов

    loader.classList.remove("loader_active");
    renderItems(values);
  };
};

const renderItems = function (valutes) {
  // создали функцию отрисовки элементов
  for (let obj of valutes) {
    const html = `   <div class="item">
        <div class="item__code">
                    ${obj.CharCode}
                </div>
                <div class="item__value">
                    ${obj.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
      </div>`;
    items.insertAdjacentHTML("afterbegin", html);
  }
};

if (localStorage.getItem("valutes")) {
  const valutesList = JSON.parse(localStorage.getItem("valutes"));
  renderItems(valutesList);
} else {
  getRequest();
}
