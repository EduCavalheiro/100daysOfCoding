const links = document.querySelectorAll(".link");

links.forEach((link) => {
  console.log(link);
});

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href);
  }
});

const dados = [1, 2, 3];

const arrayLinks = Array.from(links);
const anchorLinks = arrayLinks.filter(
  (link) => link instanceof HTMLAnchorElement
);

// ===================================================
const colorLinks = document.querySelectorAll(".link");

function activeElement(elemento: HTMLElement) {
  elemento.style.color = "red";
  elemento.style.border = "2px solid red";
}

links.forEach((elemento) => {
  if (elemento instanceof HTMLElement) {
    activeElement(elemento);
  }
});
