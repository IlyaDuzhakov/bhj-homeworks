const actualValues = document.querySelectorAll(".dropdown__value");
const list = document.querySelector(".dropdown__list");
for (let i = 0; i < actualValues.length; i = i + 1) {
  actualValues[i].addEventListener("click", () => {
    list.classList.toggle("dropdown__list_active");
  });
}


const items = document.querySelectorAll(".dropdown__item");
for (let i = 0; i < items.length; i = i + 1) {
  items[i].addEventListener("click", (event) => {
    event.preventDefault();

    const language = items[i].firstElementChild.innerHTML;

    actualValues[0].innerHTML = language;
    list.classList.remove("dropdown__list_active");
  });
}
