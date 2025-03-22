
const containers = document.querySelectorAll(".hole");
const win = document.querySelector("#dead");
const lost = document.querySelector("#lost");
let counterWin = 0;
let counterLost = 0;

// Только если при клике на лунку у неё есть класс hole_has-mole вы должны засчитать +1 к победе. В ином случае - поражение.
const newGame = () => {
  counterLost = 0; /* а два или три знака равно используем при сравнении переменных*/
  counterWin = 0; /* мы в переменную ПРИСВАИВАЕМ новое значение*/
  lost.innerHTML = counterLost;
  win.innerHTML = counterWin;
};

const checkWinLost = () => {
  if (counterLost === 5) {
    alert("Вы проиграли!");
    newGame();
  }
  if (counterWin === 10) {
    alert("Вы выиграли!");
    newGame();
  }
};

for (let i = 0; i < containers.length; i = i + 1) {
  containers[i].addEventListener("click", () => {
    if (containers[i].classList.contains("hole_has-mole")) {
      counterWin = counterWin + 1;
      win.innerHTML =
        counterWin; /*на странице используем измененное значение counterWin*/
    } else {
      counterLost = counterLost + 1;
      lost.innerHTML = counterLost;
    }
    // console.log(counterLost)
    setTimeout(() => {
      checkWinLost(); /*когда мы кликаем и у нас меняется счет - это повод проверь, нет ли у нас проигрыша или выигрыша*/
    }, 0); /*даже если задержка 0, код выполнится после всех синхронных операций*/
  });
}
