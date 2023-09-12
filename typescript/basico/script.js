"use strict";
let produto = "Livro";
let preco = 200;
const carro = {
    marca: "Audi",
    portas: 5,
};
const barato = preco < 400 ? true : "produto caro";
function somar(a, b) {
    return a + b;
}
somar(10, 20);
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$" + produto.preco;
    return produto;
}
// ================================================================================
const produtoNovo = transformarPreco(nintendo);
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
const text = normalizarTexto("NORMALIZE O TEXTO");
// ================================================================================
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        localStorage.setItem("total", String(value));
        calcularGanho(value);
    }
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}
// ================================================================================
const frase1 = new String("Uma string");
const frase2 = String("Outra string");
const frase3 = "Mais uma string";
console.log(typeof frase1); // Vai retornar um object
console.log(typeof frase2); // enquanto o restante vai ser uma string
console.log(typeof frase3);
// ================================================================================
let total2 = "300";
function isNumber(value) {
    return typeof value === "number";
}
console.log(isNumber(total2));
const button = document.querySelector("button");
button?.addEventListener("click", () => alert("clicou no butao"));
// ================================================================================
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    else if (typeof value === "string") {
        return Number(value);
    }
    else {
        throw new Error("O valor precisa ser um number | string");
    }
}
console.log(toNumber("Nope"));
