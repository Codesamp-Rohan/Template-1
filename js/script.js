// CURSOR
const cursor = document.querySelector(".cursor");

// PAGE1
const navbar = document.querySelector("nav");
const page1Image = document.querySelector(".page1-image");
const page1Content = document.querySelector(".page1-content");

// CURSOR AREA START
window.addEventListener("mousemove", function (e) {
  setTimeout(() => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  }, 100);
});
// CURSORE AREA END

window.addEventListener("load", function () {
  navbar.style.opacity = "1";
  page1Image.style.marginLeft = "0%";
  page1Content.style.opacity = "1";
});

let btn = document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    let x = e.offsetX;
    let y = e.offsetY;
    let btnWidth = btn.clientWidth;
    let btnHeight = btn.clientHeight;
    let transX = (x - btnWidth) / 2;
    let transY = (y - btnHeight) / 2;
    btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
  });
  btn.addEventListener("mouseout", function (e) {
    btn.style.transform = "";
  });
});

// SWIPER
var indicatorBtn = document.getElementsByClassName("indicatorBtn");
var slide = document.querySelector("#slide-row");
indicatorBtn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (let i = 0; i < 4; i++) {
    indicatorBtn[i].classList.remove("active");
  }
  this.classList.add("active");
};
indicatorBtn[1].onclick = function () {
  slide.style.transform = "translateX(-60vw)";
  for (let i = 0; i < 4; i++) {
    indicatorBtn[i].classList.remove("active");
  }
  this.classList.add("active");
};
indicatorBtn[2].onclick = function () {
  slide.style.transform = "translateX(-120vw)";
  for (let i = 0; i < 4; i++) {
    indicatorBtn[i].classList.remove("active");
  }
  this.classList.add("active");
};
indicatorBtn[3].onclick = function () {
  slide.style.transform = "translateX(-180vw)";
  for (let i = 0; i < 4; i++) {
    indicatorBtn[i].classList.remove("active");
  }
  this.classList.add("active");
};
