class Produto {
  public nome: string;
  public tipo: string;
  private preco: number | undefined;
  constructor(nome: string, tipo: string, preco?: number) {
    this.nome = nome;
    this.tipo = tipo;
    this.preco = preco;
  }

  getDescription(): string {
    return `O ${this.tipo} ${this.nome}, custa ${this.getPreco()}`;
  }

  getPreco(): string {
    return `R$${this.preco},00`;
  }
}

const book = new Produto("Carotinha", "livro", 900);

console.log(book.getDescription());
