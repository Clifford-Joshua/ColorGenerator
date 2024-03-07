const btn = document.querySelectorAll(".btn");
btn.forEach(function (Eachbtn) {
  Eachbtn.addEventListener("click", function (e) {
    // current btn being click
    let currentbtn = e.currentTarget;
    let hexcolorsgenerator = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hex = "#";
    // first divbody
    if (currentbtn.classList.contains("first")) {
      let changebgcolor = document.querySelector(".sub_body1");
      let changetextname = document.querySelector(".colorshow1");
      // creating a loop that run six times
      for (let i = 0; i < 6; i++) {
        hex += hexcolorsgenerator[showingcolorshex()];
        changebgcolor.style.backgroundColor = hex;
        changetextname.textContent = hex;
      }
    }
    // second divbody
    if (currentbtn.classList.contains("second")) {
      let changebgcolor = document.querySelector(".sub_body2");
      let changetextname = document.querySelector(".colorshow2");
      // creating a loop that run six times
      for (let i = 0; i < 6; i++) {
        hex += hexcolorsgenerator[showingcolorshex()];
        changebgcolor.style.backgroundColor = hex;
        changetextname.textContent = hex;
      }
    }
    // third divbody
    if (currentbtn.classList.contains("third")) {
      let changebgcolor = document.querySelector(".sub_body3");
      let changetextname = document.querySelector(".colorshow3");
      // creating a loop that run six times
      for (let i = 0; i < 6; i++) {
        hex += hexcolorsgenerator[showingcolorshex()];
        changebgcolor.style.backgroundColor = hex;
        changetextname.textContent = hex;
      }
    }
    // fourth divbody
    if (currentbtn.classList.contains("fourth")) {
      let changebgcolor = document.querySelector(".sub_body4");
      let changetextname = document.querySelector(".colorshow4");
      // creating a loop that run six times
      for (let i = 0; i < 6; i++) {
        hex += hexcolorsgenerator[showingcolorshex()];
        changebgcolor.style.backgroundColor = hex;
        changetextname.textContent = hex;
      }
    }
    // fifth divbody
    if (currentbtn.classList.contains("fifth")) {
      let changebgcolor = document.querySelector(".sub_body5");
      let changetextname = document.querySelector(".colorshow5");
      // creating a loop that run six times
      for (let i = 0; i < 6; i++) {
        hex += hexcolorsgenerator[showingcolorshex()];
        changebgcolor.style.backgroundColor = hex;
        changetextname.textContent = hex;
      }
    }
    // generate at random
    if (currentbtn.classList.contains("all")) {
      // for the first div
      let firstbgcolor = document.querySelector(".sub_body1");
      let firsttextchanger = document.querySelector(".colorshow1");
      for (let i = 0; i < 6; i++) {
        hex += hexcolorsgenerator[showingcolorshex()];
        firstbgcolor.style.backgroundColor = hex;
        firsttextchanger.textContent = hex;
      }
      // second div
      let secondbgcolor = document.querySelector(".sub_body2");
      let secondtextchanger = document.querySelector(".colorshow2");
      let hex1 = "#";
      for (let i = 0; i < 6; i++) {
        hex1 += hexcolorsgenerator[showingcolorshex()];
        secondbgcolor.style.backgroundColor = hex1;
        secondtextchanger.textContent = hex1;
      }
      // third div
      let thirdbgcolor = document.querySelector(".sub_body3");
      let thirdtextchanger = document.querySelector(".colorshow3");
      let hex2 = "#";
      for (let i = 0; i < 6; i++) {
        hex2 += hexcolorsgenerator[showingcolorshex()];
        thirdbgcolor.style.backgroundColor = hex2;
        thirdtextchanger.textContent = hex2;
      }
      // fourth div
      let fourthbgcolor = document.querySelector(".sub_body4");
      let fourthtextchanger = document.querySelector(".colorshow4");
      let hex3 = "#";
      for (let i = 0; i < 6; i++) {
        hex3 += hexcolorsgenerator[showingcolorshex()];
        fourthbgcolor.style.backgroundColor = hex3;
        fourthtextchanger.textContent = hex3;
      }
      // fifth div
      let fifthbgcolor = document.querySelector(".sub_body5");
      let fifthtextchanger = document.querySelector(".colorshow5");
      let hex4 = "#";
      for (let i = 0; i < 6; i++) {
        hex4 += hexcolorsgenerator[showingcolorshex()];
        fifthbgcolor.style.backgroundColor = hex4;
        fifthtextchanger.textContent = hex4;
      }
    }
    // callback function
    function showingcolorshex() {
      return Math.floor(Math.random() * hexcolorsgenerator.length);
    }
  });
});
