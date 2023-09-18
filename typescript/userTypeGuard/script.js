"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function handleCursos(data) {
    if (data instanceof Array) {
        console.log("é uma instância de array");
    }
    if (Array.isArray(data)) {
        console.log("É array");
    }
}
function isString(value) {
    return typeof value === "string";
}
function handleData(data) {
    if (isString(data)) {
        console.log(data.toLowerCase());
    }
}
handleData(200);
handleData("ORIgamid");
async function fetchProduto() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const json = await response.json();
    handleProduto(json);
}
fetchProduto();
function isProduto(value) {
    return value && typeof value === "object" && "nome" in value ? true : false;
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data.nome);
    }
}
async function getCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    showCursos(json);
}
getCursos();
function showCursos(data) {
    if (Array.isArray(data)) {
        data.forEach((curso) => {
            if (isCurso(curso)) {
                document.body.innerHTML += `
            <h1>${curso.nome}</h1>
            <ul>
                <li>Aulas: ${curso.aulas}</li>
                <li>Horas: ${curso.horas}</li>
                <li>Gratuito: ${curso.gratuito ? "Sim" : "Nao"}</li>
                <li>Nivel: ${curso.nivel}</li>
            </ul>
        `;
            }
        });
    }
}
function isCurso(value) {
    return value && typeof value === "object" && "nome" in value ? true : false;
}
