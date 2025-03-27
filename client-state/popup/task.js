const btnClose = document.querySelector(".modal__close");
const popup = document.querySelector(".modal");

const getCookies = (str) => {
  const ar = str.split("; ");

  const cookies = {};
  for (let i = 0; i < ar.length; i = i + 1) {
    const [key, value] = ar[i].split("=");

    cookies[key] = value;
  }
  return cookies;
};

document.addEventListener("DOMContentLoaded", () => {
  const cookies = getCookies(document.cookie);
  if (cookies.closed !== "true") {
    popup.classList.add("modal_active");
  }
});

btnClose.addEventListener("click", () => {
  popup.classList.remove("modal_active");
  document.cookie = "closed = true";
});
