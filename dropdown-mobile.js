document.addEventListener("DOMContentLoaded", () => {
  function initDropdown(triggerSelector, menuSelector) {
    const trigger = document.querySelector(triggerSelector);
    const menu = document.querySelector(menuSelector);
    const menuLinks = menu.querySelectorAll("a");

    if (!trigger || !menu) return;

    const icon = trigger.querySelector("use");

    function setIcon(isOpen) {
      icon.setAttribute(
        "href",
        isOpen
          ? "./img/icons.svg#icon-path-open"
          : "./img/icons.svg#icon-path-closed"
      );
    }

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.toggle("active");
      setIcon(isOpen);
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        setIcon(false);
      });
    });
  }

  initDropdown(".features-dropdown-mobile", ".features-mobile");
  initDropdown(".company-dropdown-mobile", ".company-mobile");
  initDropdown(".features-dropdown", ".features");
  initDropdown(".company-dropdown", ".company");
});
