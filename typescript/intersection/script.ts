type Produto = {
    preco: number;
};

type Carro = {
    rodas: number;
    portas: number;
};

type Livro = {
    paginas: number;
};

function handleProdutoCarro(dados: Produto & Carro) {
    console.log(dados.portas);
    console.log(dados.rodas);
    console.log(dados.preco);
}

handleProdutoCarro({rodas: 4, portas: 6, preco: 2342343});

