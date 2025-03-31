const textArea = document.querySelector("#editor");
const btnClear = document.querySelector(".clear");

textArea.value = localStorage.getItem("text");

textArea.addEventListener("input", () => {
  localStorage.setItem("text", textArea.value);
});

btnClear.addEventListener("click", () => {
  textArea.value = "";
  localStorage.setItem("text", textArea.value);
});
