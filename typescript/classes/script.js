"use strict";
class Produto {
    nome;
    tipo;
    preco;
    constructor(nome, tipo, preco) {
        this.nome = nome;
        this.tipo = tipo;
        this.preco = preco;
    }
    getDescription() {
        return `O ${this.tipo} ${this.nome}, custa ${this.getPreco()}`;
    }
    getPreco() {
        return `R$${this.preco},00`;
    }
}
const book = new Produto("Carotinha", "livro", 900);
console.log(book.getDescription());
