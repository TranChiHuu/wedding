export function handleMenu() {
  // Get all elements with the specified classes
  const menuOpenButton = document.querySelector(".btn-menu-open");
  const menuCloseButton = document.querySelector(".btn-menu-close");
  const menuIconList = document.querySelector("ul.list-menu-icon");
  const logoElement = document.querySelector(".bii-logo");

  // Event listeners
  menuOpenButton.addEventListener("click", () => {
    // Show/hide elements and adjust styles
    menuIconList.style.opacity = "1";
    menuIconList.style.pointerEvents = "";
    menuCloseButton.style.display = "block";
    menuOpenButton.style.display = "none";
  });

  menuCloseButton.addEventListener("click", () => {
    // Show/hide elements and adjust styles
    menuIconList.style.opacity = "0";
    menuIconList.style.pointerEvents = "none";
    menuOpenButton.style.display = "block";
    menuCloseButton.style.display = "none";
  });

  // Timer to show/hide elements after a delay
  setTimeout(() => {
    menuOpenButton.style.display = "none";
    menuCloseButton.style.display = "block";
    menuIconList.style.opacity = "1";
  }, 3000);

  // Window load event listener
  window.addEventListener("load", () => {
    if (logoElement) {
      // Adjust styles and media query based on the logo element's presence
      document.querySelector("#menu-access").style.bottom = "278px";
      const styleElement = document.createElement("style");
      styleElement.textContent +=
        "@media (max-width: 799px){#menu-access{bottom: 238px!important;}}";
      document.head.appendChild(styleElement);
    }
  });

  // Function to shake tooltops
  function shakeTooltip() {
    const tooltipChildren = menuIconList.children;
    for (let i = 0; i < tooltipChildren.length; i++) {
      setTimeout(() => {
        if (menuCloseButton.style.display !== "none") {
          // Add class and show tooltip text
          tooltipChildren[i].classList.add("shake");
          tooltipChildren[i].children[0].children[0].children[0].style.visibility =
            "visible";
          setTimeout(() => {
            // Remove shake class and hide tooltip text
            tooltipChildren[i].children[0].children[0].children[0].style.visibility = "";
            tooltipChildren[i].classList.remove("shake");
          }, 3000);
        } else {
          return false;
        }
      }, i * 5000);
    }
  }

  // Timer to shake tooltops
  if (document.querySelector("#menu-access")) {
    setTimeout(() => {
      shakeTooltip();
      let myInterval = setInterval(shakeTooltip, 20000);
    }, 3000);
  }

  // Event listener for menu close button click
  menuCloseButton.addEventListener("click", () => {
    // Hide tooltip text and clear interval
    document
      .querySelectorAll(".tooltiptext")
      .forEach((el) => (el.style.visibility = ""));
    clearInterval(myInterval);
  });
}
