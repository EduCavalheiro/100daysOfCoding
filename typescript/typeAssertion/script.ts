const video = document.querySelector(".player") as HTMLVideoElement;

video.volume;

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  return response.json() as Promise<Produto>;
}

async function handleProduto() {
  const produto: Produto = await fetchProduto();

  console.log(produto.nome);
}

handleProduto();

// ===========================================

const video1 = document.querySelector(".player") as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector(".player");
const video3 = document.querySelector<HTMLVideoElement>(".player");
