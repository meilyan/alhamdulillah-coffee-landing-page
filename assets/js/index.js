// coffe waves
document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: "#animatedCoffee",
    translateY: [
      { value: -20, duration: 1000, easing: "easeInOutSine" },
      { value: 20, duration: 1000, easing: "easeInOutSine" },
      { value: 0, duration: 1000, easing: "easeInOutSine" },
    ],
    loop: true,
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const coffeeElements = document.querySelectorAll(".coffe");

  coffeeElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      anime({
        targets: element,
        translateY: [
          { value: -20, duration: 200 },
          { value: 0, duration: 800 },
        ],
        easing: "easeOutElastic(1, .5)",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const mainImage = document.getElementById("animatedCoffee");
  const clickableImages = document.querySelectorAll(".clickable-img");

  clickableImages.forEach((image) => {
    image.addEventListener("click", () => {
      // Ganti src dari mainImage dengan src dari gambar yang diklik
      mainImage.src = image.src;

      // Animasi menggunakan anime.js
      anime({
        targets: mainImage,
        translateY: [
          { value: -10, duration: 200 },
          { value: 0, duration: 800 },
        ],
        easing: "easeOutElastic(1, .5)",
      });
    });
  });
});

const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);


AOS.init();