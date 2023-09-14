"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("Livro Novo", "Danielle Montibeller");
    }
    if (busca === "LOL") {
        return new Jogo("League of Legends", 5);
    }
    return null;
}
const produto = buscarProduto("O Hobbit");
if (produto instanceof Produto) {
    console.log(produto.nome);
}
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto instanceof Jogo) {
    console.log(produto.jogadores);
}
const honda = {
    nome: "Honda",
};
// Não é possível verificar a instanceOf do Carro pois interfaces são objetos e não classes.
console.log(honda);
// ==============================================================
const link = document.getElementById("origamid");
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http", "https");
}
