document.addEventListener("DOMContentLoaded", () => {
  const featuresDropdownMobile = document.querySelector(
    ".features-dropdown-mobile"
  );
  const companyDropdownMobile = document.querySelector(
    ".company-dropdown-mobile"
  );
  const featuresMenuMobile = document.querySelector(".features-mobile");
  const companyMenuMobile = document.querySelector(".company-mobile");

  featuresDropdownMobile.addEventListener("click", (e) => {
    e.stopPropagation();
    featuresMenuMobile.classList.toggle("active");

    const icon = featuresDropdownMobile.querySelector("use");

    const isOpen = featuresMenuMobile.classList.contains("active");

    icon.setAttribute(
      "href",
      isOpen
        ? "./img/icons.svg#icon-path-open"
        : "./img/icons.svg#icon-path-closed"
    );
  });

  companyDropdownMobile.addEventListener("click", (e) => {
    e.stopPropagation();
    companyMenuMobile.classList.toggle("active");

    const icon = companyDropdownMobile.querySelector("use");

    const isOpen = companyMenuMobile.classList.contains("active");

    icon.setAttribute(
      "href",
      isOpen
        ? "./img/icons.svg#icon-path-open"
        : "./img/icons.svg#icon-path-closed"
    );
  });
});
