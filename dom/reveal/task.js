window.addEventListener("scroll", () => {
  const allElements = document.querySelectorAll(".reveal");
  for (let i = 0; i < allElements.length; i = i + 1) {
    const coords =
      allElements[
        i
      ].getBoundingClientRect(); /*получили координаты и размеры html элемента*/
    if (coords.top > 0 && coords.top < window.innerHeight) {
      allElements[i].classList.add("reveal_active");
    }
  }
});
