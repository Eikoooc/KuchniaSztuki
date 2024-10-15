const divs = document.querySelectorAll(".provisions");
const burger = document.querySelector('.nav__burger')
const navItems = document.querySelectorAll('.nav__item')
const navMobile = document.querySelector('.nav--mobile')

const handleNav = () => {
  navMobile.style.display = 'flex'
  document.body.classList.add("fixed-position");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navMobile.style.display = 'none';
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

burger.addEventListener("click", handleNav);