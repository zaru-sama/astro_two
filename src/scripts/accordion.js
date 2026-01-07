function init() {
  const buttons = document.querySelectorAll(".toggle-button");

  buttons.forEach((button) => {
    const id = button.getAttribute("name");
    const panel = document.getElementById(id);
    if (!panel) return;

    const inner = panel.querySelector(".accordion-inner");
    if (!inner) return;

    // Initial closed state
    panel.style.height = "0px";
    panel.style.overflow = "hidden";
    panel.style.maskImage = "linear-gradient(black 50%, transparent 100%)";

    inner.style.opacity = "0";
    inner.style.filter = "blur(6px)";

    button.setAttribute("aria-expanded", "false");

    let panelAnimation;
    let innerAnimation;

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // Cancel running animations
      panelAnimation?.cancel();
      innerAnimation?.cancel();

      panel.style.overflow = "hidden";

      if (isOpen) {
        // CLOSE
        button.setAttribute("aria-expanded", "false");

        const startHeight = panel.scrollHeight;

        panel.style.height = `${startHeight}px`;

        panelAnimation = panel.animate(
          {
            height: [`${startHeight}px`, "0px"],
            maskImage: [
              "linear-gradient(black 50%, transparent 100%)",
              "linear-gradient(black 50%, transparent 100%)",
            ],
          },
          {
            duration: 400,
            easing: "cubic-bezier(0.17, 0.55, 0.55, 1)",
            fill: "forwards",
          }
        );

        innerAnimation = inner.animate(
          {
            opacity: [1, 0],
            filter: ["blur(0px)", "blur(6px)"],
          },
          {
            duration: 400,
            easing: "ease-out",
            fill: "forwards",
          }
        );
      } else {
        // OPEN
        button.setAttribute("aria-expanded", "true");

        const height = panel.scrollHeight;

        panelAnimation = panel.animate(
          {
            height: ["0px", `${height}px`],
            maskImage: [
              "linear-gradient(black 100%, transparent 100%)",
              "linear-gradient(black 100%, transparent 100%)",
            ],
          },
          {
            duration: 400,
            easing: "cubic-bezier(0.17, 0.55, 0.55, 1)",
            fill: "forwards",
          }
        );

        panelAnimation.onfinish = () => {
          panel.style.height = "auto";
          panel.style.overflow = "";
        };

        innerAnimation = inner.animate(
          {
            opacity: [0, 1],
            filter: ["blur(6px)", "blur(0px)"],
          },
          {
            duration: 400,
            easing: "ease-out",
            fill: "forwards",
          }
        );
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
