// document.addEventListener("DOMContentLoaded", () => {
//   const featuresDropdown = document.querySelector(".features-dropdown");
//   const companyDropdown = document.querySelector(".company-dropdown");
//   const featuresMenu = document.querySelector(".features");
//   const companyMenu = document.querySelector(".company");

//   featuresDropdown.addEventListener("click", (e) => {
//     e.stopPropagation();
//     featuresMenu.classList.toggle("active");

//     const icon = featuresDropdown.querySelector("use");

//     const isOpen = featuresMenu.classList.contains("active");

//     icon.setAttribute(
//       "href",
//       isOpen
//         ? "./img/icons.svg#icon-path-open"
//         : "./img/icons.svg#icon-path-closed"
//     );
//   });

//   companyDropdown.addEventListener("click", (e) => {
//     e.stopPropagation();
//     companyMenu.classList.toggle("active");

//     const icon = companyDropdown.querySelector("use");

//     const isOpen = companyMenu.classList.contains("active");

//     icon.setAttribute(
//       "href",
//       isOpen
//         ? "./img/icons.svg#icon-path-open"
//         : "./img/icons.svg#icon-path-closed"
//     );
//   });
// });

