let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // scrolling down → hide navbar
    navbar.style.transform = "translateY(-100px)";
  } else {
    // scrolling up → show navbar
    navbar.style.transform = "translateY(0)";
  }

  lastScrollY = currentScrollY;
});
