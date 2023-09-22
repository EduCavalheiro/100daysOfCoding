const produto1: [string, number] = ["Notebook", 269];

// console.log(typeof produto1[0]);
// console.log(typeof produto1[1]);

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, ProdutoDetalhes];

async function fetchVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  return response.json() as Promise<[Venda]>;
}

async function handleTotalVendas() {
  const vendas: [Venda] = await fetchVendas();

  const total: number = vendas.reduce((anterior, venda) => {
    return anterior + venda[1];
  }, 0);

  document.body.innerHTML += `<h1>${total}</h1>`;
}

handleTotalVendas();
