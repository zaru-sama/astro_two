import AOS from "aos";

function initAOS() {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
  });
}

initAOS();

document.addEventListener("astro:page-load", () => {
  initAOS();
  AOS.refreshHard();
});
