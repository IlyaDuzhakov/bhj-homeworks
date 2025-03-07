const allTabs = document.querySelectorAll(".tab");
const allContent = document.querySelectorAll(".tab__content");
for (let i = 0; i < allTabs.length; i = i + 1) {
  allTabs[i].addEventListener("click", () => {
    for (let q = 0; q < allTabs.length; q = q + 1) {
      allTabs[q].classList.remove("tab_active");
      allContent[q].classList.remove("tab__content_active");
    }
    allTabs[i].classList.add("tab_active");
    allContent[i].classList.add("tab__content_active");
  });
}
