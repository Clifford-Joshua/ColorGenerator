let fullsection = document.querySelector(".body");
let textcolor = document.querySelector(".color");
let btn = document.querySelector("#btn");
let colors = [
  "red",
  "blue",
  "green",
  "purple",
  "orange",
  "lawngreen",
  "brown",
  "skyblue",
  "black",
  "white",
];
let count = 0;
btn.addEventListener("click", function () {
  let colorss = colors[count];
  count++;
  if (count > colors.length - 1) {
    count = 0;
  }
  fullsection.style.backgroundColor = colorss;
  textcolor.textContent = colorss;
});
