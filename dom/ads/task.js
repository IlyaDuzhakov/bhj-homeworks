const allElements = document.querySelectorAll(".rotator__case");
const long = allElements.length;
let i = 0;
let interval = 1000;

let timer = setInterval(() => {
  setActiveElement();
}, interval);

function setActiveElement() {
  for (let q = 0; q < long; q = q + 1) {
    allElements[q].classList.remove("rotator__case_active");
  }
  allElements[i].classList.add("rotator__case_active");
  allElements[i].style.color = allElements[i].dataset.color;

  if (i < long - 1) {
    i = i + 1;
  } else {
    i = 0;
  }
  interval = Number(allElements[i].dataset.speed);
  clearInterval(timer);
  timer = setInterval(() => {
    setActiveElement();
  }, interval);
}
