interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {
  forma.perimetro(4);
}

// =================================

function normalizeText(text: string): string;
function normalizeText(text: string[]): string[];
function normalizeText(text: string | string[]): string | string[] {
  return typeof text === "string"
    ? text.trim().toLowerCase()
    : text.map((item) => item.trim().toLowerCase());
}

console.log(normalizeText("Texto qualquer").toUpperCase());
console.log(
  normalizeText(["Texto Abla", "Blue"]).map((text) => text.toLocaleUpperCase())
);

function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: "button"): HTMLButtonElement | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

const button = $("button");

// ===================================================

function roundNumber(number: string): string;
function roundNumber(number: number): number;
function roundNumber(number: string | number): string | number {
  return typeof number === "string"
    ? `${Math.ceil(Number(number))}`
    : Math.ceil(number);
}

const stringNumber: string = roundNumber("19.56");
const normalNumber: number = roundNumber(19.56);

console.log(typeof stringNumber, stringNumber);
console.log(typeof normalNumber, normalNumber);
