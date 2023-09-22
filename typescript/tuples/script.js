"use strict";
const produto1 = ["Notebook", 269];
async function fetchVendas() {
    const response = await fetch("https://api.origamid.dev/json/vendas.json");
    return response.json();
}
async function handleTotalVendas() {
    const vendas = await fetchVendas();
    const total = vendas.reduce((anterior, venda) => {
        return anterior + venda[1];
    }, 0);
    document.body.innerHTML += `<h1>${total}</h1>`;
}
handleTotalVendas();
