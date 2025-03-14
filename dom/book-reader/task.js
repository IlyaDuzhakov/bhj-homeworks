const btnsSize = document.querySelectorAll(".font-size");
const bookContent = document.querySelector(".book__content");
const colors = document.querySelectorAll(".book__control_color .color");
const bgColors = document.querySelectorAll(".book__control_background .color");

for (let i = 0; i < btnsSize.length; i = i + 1) {
  btnsSize[i].addEventListener("click", (event) => {
    event.preventDefault(); /*отмена поведния по умолчанию*/

    for (let q = 0; q < btnsSize.length; q = q + 1) {
      btnsSize[q].classList.remove("font-size_active");
    }
    btnsSize[i].classList.add("font-size_active");
    if (btnsSize[i].classList.contains("font-size_small")) {
      bookContent.classList.add("book_fs-small");
      bookContent.classList.remove("book_fs-big");
    } else if (btnsSize[i].classList.contains("font-size_big")) {
      bookContent.classList.add("book_fs-big");
      bookContent.classList.remove("book_fs-small");
    } else {
      bookContent.classList.remove("book_fs-small");
      bookContent.classList.remove("book_fs-big");
    }
  });
}

for (let i = 0; i < colors.length; i = i + 1) {
  colors[i].addEventListener("click", (event) => {
    event.preventDefault();

    for (let q = 0; q < colors.length; q = q + 1) {
      colors[q].classList.remove("color_active");
    }
    colors[i].classList.add("color_active");
    if (colors[i].classList.contains("text_color_black")) {
      bookContent.classList.add("book_color-black");
      bookContent.classList.remove("book_color-gray");
      bookContent.classList.remove("book_color-whitesmoke");
    } else if (colors[i].classList.contains("text_color_gray")) {
      bookContent.classList.add("book_color-gray");
      bookContent.classList.remove("book_color-black");
      bookContent.classList.remove("book_color-whitesmoke");
    } else if (colors[i].classList.contains("text_color_whitesmoke")) {
      bookContent.classList.add("book_color-whitesmoke");
      bookContent.classList.remove("book_color-black");
      bookContent.classList.remove("book_color-gray");
    }
  });
}

for (let i = 0; i < bgColors.length; i = i + 1) {
  bgColors[i].addEventListener("click", (event) => {
    event.preventDefault();
    for (let q = 0; q < bgColors.length; q = q + 1) {
      bgColors[q].classList.remove("color_active");
    }
    bgColors[i].classList.add("color_active");
    if (bgColors[i].classList.contains("bg_color_black")) {
      bookContent.classList.add("book_bg-black");
      bookContent.classList.remove("book_bg-gray");
      bookContent.classList.remove("book_bg-white");
    } else if (bgColors[i].classList.contains("bg_color_gray")) {
      bookContent.classList.add("book_bg-gray");
      bookContent.classList.remove("book_bg-black");
      bookContent.classList.remove("book_bg-white");
    } else if (bgColors[i].classList.contains("bg_color_white")) {
      bookContent.classList.add("book_bg-white");
      bookContent.classList.remove("book_bg-black");
      bookContent.classList.remove("book_bg-gray");
    }
  });
}
