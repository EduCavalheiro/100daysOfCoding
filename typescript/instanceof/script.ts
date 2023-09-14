class Produto {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class Livro extends Produto {
  autor: string;
  constructor(nome: string, autor: string) {
    super(nome);
    this.autor = autor;
  }
}

class Jogo extends Produto {
  jogadores: number;
  constructor(nome: string, jogadores: number) {
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
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

interface Carro {
  nome: string;
}

const honda: Carro = {
  nome: "Honda",
};

// Não é possível verificar a instanceOf do Carro pois interfaces são objetos e não classes.
console.log(honda);

// ==============================================================

const link: HTMLAnchorElement | HTMLElement | null =
  document.getElementById("origamid");

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http", "https");
}
