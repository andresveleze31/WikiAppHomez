let tabs = document.querySelectorAll(".tabs h4");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});

let tabs2 = document.querySelectorAll(".tabs2 h4");
let tabContents2 = document.querySelectorAll(".tab-content2 div");

tabs2.forEach((tab2, index) => {
  tab2.addEventListener("click", () => {
    tabContents2.forEach((content2) => {
      content2.classList.remove("active2");
    });
    tabs2.forEach((tab2) => {
      tab2.classList.remove("active2");
    });
    tabContents2[index].classList.add("active2");
    tabs2[index].classList.add("active2");
  });
});

let tabs3 = document.querySelectorAll(".tabs3 h4");
let tabContents3 = document.querySelectorAll(".tab-content3 div");

tabs3.forEach((tab3, index) => {
  tab3.addEventListener("click", () => {
    tabContents3.forEach((content3) => {
      content3.classList.remove("active3");
    });
    tabs3.forEach((tab3) => {
      tab3.classList.remove("active3");
    });
    tabContents3[index].classList.add("active3");
    tabs3[index].classList.add("active3");
  });
});

