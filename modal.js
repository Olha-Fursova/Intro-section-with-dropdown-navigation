const openBtn = document.querySelector(".js-open-menu");
const closeBtn = document.querySelector(".js-close-menu");
const modalOverlay = document.querySelector(".modal-overlay");
const menuLinks = modalOverlay.querySelectorAll("a");

openBtn.addEventListener("click", () => {
  modalOverlay.classList.add("is-open");
  document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("is-open");
  document.body.classList.remove("modal-open");
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    modalOverlay.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  });
});
