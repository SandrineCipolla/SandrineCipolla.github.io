//selectors

// let header = document.querySelector(".header .container");
// console.log(header);

// let grids = document.querySelectorAll(".grid");
// console.log(grids);

function menuMobile() {
  let btn = document.querySelector(".burger");
  let header = document.querySelector(".header");
  let links = document.querySelectorAll(".navbar a");

  btn.addEventListener("click", () => {
    header.classList.toggle("show-nav");
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("show-nav");
    });
  });
}
menuMobile();
