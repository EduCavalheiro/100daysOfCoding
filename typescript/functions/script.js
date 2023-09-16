"use strict";
function calcular(forma) {
    forma.perimetro(4);
}
function normalizeText(text) {
    return typeof text === "string"
        ? text.trim().toLowerCase()
        : text.map((item) => item.trim().toLowerCase());
}
console.log(normalizeText("Texto qualquer").toUpperCase());
console.log(normalizeText(["Texto Abla", "Blue"]).map((text) => text.toLocaleUpperCase()));
function $(seletor) {
    return document.querySelector(seletor);
}
const button = $("button");
function roundNumber(number) {
    return typeof number === "string"
        ? `${Math.ceil(Number(number))}`
        : Math.ceil(number);
}
const stringNumber = roundNumber("19.56");
const normalNumber = roundNumber(19.56);
console.log(typeof stringNumber, stringNumber);
console.log(typeof normalNumber, normalNumber);
