
const cookie = document.querySelector("#cookie");
const countText = document.querySelector("#clicker__counter");
const statistic = document.querySelector(".click__per-second");
let count = 0;
/* клики в секунду = количество кликов / количество секунд */
let start = 0;

cookie.addEventListener("click", () => {
  if (start === 0) {
    start = Date.now();
  }
  count = count + 1;
  countText.innerHTML = `${count}`;
  const actualTime = Date.now();
  let difference = 1;
  if (actualTime - start > 0) {
    difference = (actualTime - start) / 1000;
  }
  // console.log(difference)
  const clickToSeconds = (count / difference).toFixed(2);
  statistic.innerHTML = clickToSeconds;
  // console.log('kkjhlkhhj') /* при клике на картику самостоятельное обновление страницы не происходит, поэтому preventDefault() не нужен*/
  if (Number(count) % 2 === 1) {
    console.log("kjjkhkj");
    cookie.style.width = "250px";
    cookie.style.height = "160px";
  } else {
    cookie.style.width = "200px";
    cookie.style.height = "128px";
  }
});
