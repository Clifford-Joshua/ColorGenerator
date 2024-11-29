// getting all click me btn
const btns = document.querySelectorAll(".btn");

// btn click function

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let hex_color_value = [
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

    //   # value
    let hash_value = "#";

    // const get Parent container
    const parent_container = e.currentTarget.parentElement;

    const color_name = parent_container.children[0];

    const color_name_span = color_name.querySelector("span");

    // change background color by running a loop that goes six times cause a hex value contain of six values
    for (let i = 0; i < 6; i++) {
      hash_value += hex_color_value[generate_hex_color()];

      // setting background and name
      parent_container.style.backgroundColor = hash_value;
      color_name_span.textContent = hash_value;
    }

    // getting random values from hax color value
    function generate_hex_color() {
      return Math.floor(Math.random() * hex_color_value.length);
    }
  });
});

// generate all btn
const generate_btn = document.querySelector(".all");
const bg_divs = document.querySelectorAll(".sub_body");
generate_btn.addEventListener("click", () => {
  bg_divs.forEach((div) => {
    let hex_color_value = [
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

    //   # value
    let hash_value = "#";

    const color_name = div.children[0].querySelector("span");
    // change background color by running a loop that goes six times cause a hex value contain of six values
    for (let i = 0; i < 6; i++) {
      hash_value += hex_color_value[generate_hex_color()];

      // setting background and name
      div.style.backgroundColor = hash_value;
      color_name.textContent = hash_value;
    }

    // getting random values from hax color value
    function generate_hex_color() {
      return Math.floor(Math.random() * hex_color_value.length);
    }
  });
});
