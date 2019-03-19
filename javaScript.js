// Carousel modal
const closeModalElem = document.getElementById("modal")
const clickableElem = document.getElementById("videoModal");

const displayBox = () => {
  const hiddenModalElem = document.getElementById("modal");
  hiddenModalElem.style.display = "block";
}

const closeBox = () => {
  const closeModalElem = document.getElementById("modal");
  closeModalElem.style.display = 'none';
}

clickableElem.addEventListener("click", () => {
  displayBox();
});


closeModalElem.addEventListener('click', () => {
  closeBox();
})
