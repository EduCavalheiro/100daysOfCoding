"use strict";
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ["banana", "fruta", "limao", "uva", "caqui", "melancia"];
function getFirstFive(lista) {
    return lista.slice(0, 5);
}
console.log(getFirstFive(numeros));
console.log(getFirstFive(frutas));
function notNull(arg) {
    if (arg !== null)
        return arg;
    else
        return null;
}
console.log(notNull("Edu"));
function dataType(a) {
    const result = {
        data: a,
        type: typeof a,
    };
    return result;
}
console.log(dataType("Test"));
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook, notebook.nome);
}
handleData();
