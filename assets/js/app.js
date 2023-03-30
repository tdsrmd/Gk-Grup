const canvas = document.getElementById("home");
const context = canvas.getContext("2d");

canvas.width = 1440;
canvas.height = 820;

const frameCount = 58;
const currentFrame = (index) =>
  `assets/media/home/${(index + 1).toString().padStart(4, "0")}-min.jpg`;

const images = [];
const home = {
  frame: 0,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(home, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    trigger: ".home",
    scrub: 0.3,
    start: ".home",
    end: "bottom bottom",
  },
  onUpdate: render,
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[home.frame], 0, 0);
}
let homeEnd = document.querySelector(".home");
var elem = parseInt(
  window.getComputedStyle(homeEnd, null).getPropertyValue("height")
);
let home2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    scrub: true,
    start: elem - 500,
    end: elem - 300,
  },
});

home2.to("#home", { autoAlpha: 0.5 }).to("#home", { autoAlpha: 0 });

let cards = gsap.timeline({
  scrollTrigger: {
    trigger: ".qualities__cards",
    start: "top 70%",
  },
});
cards.fromTo(
  ".qualities__card",

  { y: -100, autoAlpha: 0 },
  { y: 0, autoAlpha: 1, stagger: 0.3 }
);

let showtext = gsap.timeline({
  scrollTrigger: {
    trigger: ".showtext",
    scrub: 1,
    pin: true,
    pinSpacing: false,
    start: "top 30%",
    end: "bottom bottom",
  },
});

showtext.to(".showtext h3", 0.1, { css: { "background-position-x": 0 } });

let scrollAnimate = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    scrub: true,
    start: "center center",
    end: "bottom center",
  },
});

scrollAnimate.to("#scrollDown", { autoAlpha: 0 });
