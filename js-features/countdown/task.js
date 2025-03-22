
const timer = document.querySelector("#timer");
let seconds = 15308; /* ceil - пол округление до большего*/

function renderTime() {
  let hour = Math.floor(
    seconds / (60 * 60)
  ).toString(); /* floor - пол округление до меньшего*/
  if (hour.length < 2) {
    hour = "0" + hour;
  }
  const remainder = seconds - hour * 3600;
  let minutes = Math.floor(remainder / 60).toString();
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  let sec = (remainder - minutes * 60).toString();
  // console.log(sec.length)
  if (sec.length < 2) {
    sec = "0" + sec;
  }
  timer.innerHTML = `${hour}:${minutes}:${sec}`;
  // console.log(hour, minutes, sec)
}


const timerId = setInterval(() => {
  if (seconds === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerId);
    return;
  }
  seconds = seconds - 1;
  renderTime();
  // console.log(timerId)
}, 1000);

