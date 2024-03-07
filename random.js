let fullsection = document.querySelector(".body");
let textcolor = document.querySelector(".color");
let btn = document.querySelector("#btn");
let colors = [
  "black",
  "white",
  "yellow",
  "blue",
  "skyblue",
  "brown",
  "lawngreen",
  "navyblue",
  "green",
  "silver",
  "purple",
];
btn.addEventListener("click", function () {
  let hex = allcolors();
  let currentcolor = colors[hex];
  fullsection.style.backgroundColor = currentcolor;
  textcolor.textContent = currentcolor;
});
function allcolors() {
  return Math.floor(Math.random() * colors.length);
}
