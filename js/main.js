const divs = document.querySelectorAll(".provisions");

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
