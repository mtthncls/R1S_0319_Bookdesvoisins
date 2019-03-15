// Carousel modal
const displayBox = () => {
  console.log("displaybox function");
  const hiddenModal = document.getElementById("modal");
  hiddenModal.style.display = "block";
}


console.log("test");
const clickableElem = document.getElementById("carouselQuartierLibre");
console.log(clickableElem);
clickableElem.addEventListener("click", () => {
  console.log("cliked!!")
  displayBox();
});
