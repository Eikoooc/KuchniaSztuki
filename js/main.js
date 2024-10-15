const divs = document.querySelectorAll(".provisions");
const burger = document.querySelector(".nav__burger");
const navItems = document.querySelectorAll(".nav__item");
const navMobile = document.querySelector(".nav--mobile");
const burgerMobile = document.querySelector(".nav__burger--mobile")

const handleNav = () => {
  navMobile.classList.toggle("nav--mobile-display");
  document.body.classList.toggle('fixed-position');
  // if (navMobile.classList.contains("nav--mobile-display")) {
  //   document.body.classList.add("fixed-position");
  // } else {
  //   document.body.classList.remove("fixed-position");
  // }

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navMobile.classList.remove("nav--mobile-display");
      document.body.classList.remove("fixed-position");
    });
  });
};

function toggleFullSize(event) {
  const div = event.currentTarget;

  if (div.classList.contains("provisions--full")) {
    div.classList.remove("provisions--full");
  } else {
    divs.forEach((d) => d.classList.remove("provisions--full"));
    div.classList.add("provisions--full");
  }
}

divs.forEach((div) => {
  div.addEventListener("click", toggleFullSize);
});

[burger, burgerMobile].forEach(btn => {
  btn.addEventListener('click', handleNav);
});
