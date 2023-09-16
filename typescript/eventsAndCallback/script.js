"use strict";
// const button = document.querySelector("button");
// // function handleClick(event: Event) {
// //   console.log(event);
// // }
// function handleClick(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this);
// }
// button?.addEventListener("click", handleClick);
const menuButton = document.getElementById("btn-mobile");
const menuNav = document.getElementById("nav");
menuButton?.addEventListener("click", () => {
    toggleActiveMenu();
    menuButton.ariaExpanded =
        menuButton.ariaExpanded === "true" ? "false" : "true";
    menuButton.ariaLabel =
        menuButton.ariaLabel === "Abrir Menu" ? "Fechar Menu" : "Abrir Menu";
});
function toggleActiveMenu() {
    if (menuNav) {
        menuNav.classList.toggle("active");
    }
}
