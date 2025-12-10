const openBtn = document.querySelector(".js-open-menu");
const closeBtn = document.querySelector(".js-close-menu");
const modalOverlay = document.querySelector(".modal-overlay");
const menuLinks = modalOverlay.querySelectorAll("a");

const dropdowns = modalOverlay.querySelectorAll(
  ".features-mobile, .company-mobile"
);
const dropdownIcons = modalOverlay.querySelectorAll(
  ".features-dropdown-mobile use, .company-dropdown-mobile use"
);

openBtn.addEventListener("click", () => {
  modalOverlay.classList.add("is-open");
  document.body.classList.add("modal-open");
});

const closeMenu = () => {
  modalOverlay.classList.remove("is-open");
  document.body.classList.remove("modal-open");

  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
  });

  dropdownIcons.forEach((icon) => {
    icon.setAttribute("href", "./img/icons.svg#icon-path-closed");
  });
};

closeBtn.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
