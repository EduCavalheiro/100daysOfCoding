let produto: string = "Livro";
let preco: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
};

const barato = preco < 400 ? true : "produto caro";

function somar(a: number, b: number): number {
  return a + b;
}

somar(10, 20);

const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = "R$" + produto.preco;

  return produto;
}

// ================================================================================

const produtoNovo = transformarPreco(nintendo);

function normalizarTexto(texto: string): string {
  return texto.trim().toLowerCase();
}

const text = normalizarTexto("NORMALIZE O TEXTO");

// ================================================================================

const input: HTMLInputElement | null = document.querySelector("input");
const total = localStorage.getItem("total");

if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p: HTMLParagraphElement | null = document.querySelector("p");

  if (p) {
    p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    const value = Number(input.value);
    localStorage.setItem("total", String(value));
    calcularGanho(value);
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
}

// ================================================================================

const frase1 = new String("Uma string");
const frase2 = String("Outra string");
const frase3 = "Mais uma string";

console.log(typeof frase1); // Vai retornar um object
console.log(typeof frase2); // enquanto o restante vai ser uma string
console.log(typeof frase3);

// ================================================================================

let total2: string | number = "300";

function isNumber(value: string | number): boolean {
  return typeof value === "number";
}

console.log(isNumber(total2));

const button: HTMLButtonElement | null = document.querySelector("button");

button?.addEventListener("click", () => alert("clicou no butao"));

// ================================================================================

function toNumber(value: number | string) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value);
  } else {
    throw new Error("O valor precisa ser um number | string");
  }
}

console.log(toNumber("Nope"));

// ================================================================================

type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};


function preencherDados(dados: Produto) {
  document.body.innerHTML = `
  <h2>${dados.nome}</h2>
  <p>${dados.preco}</p>
  <p>${dados.teclado}</p>
  `;
}

preencherDados({
  nome: 'Computador',
  preco: 2000,
  teclado: true
});

// ================================================================================

interface InterfaceProduto {
  nome: string;
  preco: number;
  teclado: boolean;
};


const novoProduto: InterfaceProduto = {
  nome: 'Nome do produto',
  preco: 700,
  teclado: false
}

function renderizarProduto(dados: InterfaceProduto) {
  document.body.innerHTML = `
  <h2>${dados.nome}</h2>
  <p>${dados.preco}</p>
  <p>${dados.teclado}</p>
  `;
}

renderizarProduto(novoProduto);

// ================================================================================

interface InterfaceApiProduct {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: InterfaceApiEmpresa;
  empresaMontadora: InterfaceApiEmpresa;
};

interface InterfaceApiEmpresa {
  nome: string;
  fundacao: number;
  pais: string;
}



async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data: InterfaceApiProduct | null = await response.json();

  if(data) {
    showProduct(data);
  }
}

fetchProduct();

function showProduct(produto: InterfaceApiProduct) {
  document.body.innerHTML = `
  <div>
  <h1>Detalhes do Produto</h1>
  <ul>
  <li><strong>Nome:</strong> ${produto.nome}</li>
  <li><strong>Preço:</strong> R$ ${produto.preco}</li>
  <li><strong>Descrição:</strong> ${produto.descricao}</li>
  <li><strong>Garantia:</strong> ${produto.garantia} anos</li>
  <li><strong>Seguro contra acidentes:</strong> ${produto.seguroAcidentes ? 'Sim' : 'Não'}</li>
  </ul>
  <h2>Informações da Empresa Fabricante</h2>
  <ul>
  <li><strong>Nome:</strong> ${produto.empresaFabricante.nome}</li>
  <li><strong>Fundação:</strong> ${produto.empresaFabricante.fundacao}</li>
  <li><strong>País:</strong> ${produto.empresaFabricante.pais}</li>
  </ul>
  <h2>Informações da Empresa Montadora</h2>
  <ul>
  <li><strong>Nome:</strong> ${produto.empresaMontadora.nome}</li>
  <li><strong>Fundação:</strong> ${produto.empresaMontadora.fundacao}</li>
  <li><strong>País:</strong> ${produto.empresaMontadora.pais}</li>
  </ul>
  </div>
  `;
};

// ================================================================================

const numeros = [10, 20, 30, 40, 50, 60];
const valores = [10, 20, 30, 'Erro', 50, 60];

function maiorQue10(data: number[]) {
  return data.filter(n => n > 10);
}

function filtrarValores(data: Array<number | string>){
  return data.filter(item => typeof item === 'number');
}

console.log(filtrarValores(valores));
console.log(maiorQue10(numeros));

// ================================================================================

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>,
  idAulas: Array<number>,
  nivel: "iniciante" | "avancado"
};

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data: Array<Curso> | null = await response.json();
  
  if(data) {
    showCursos(data);
  }
}

fetchCursos();

function showCursos(cursos: Array<Curso>) {
  cursos.map(curso => inserirCurso(curso));
};

function inserirCurso(curso: Curso) {
  let color: string = curso.nivel === 'iniciante' ? 'blue' : 'red';
  
  document.body.innerHTML += `
  <div>
  <h1>Detalhes do Curso</h1>
  <ul>
  <li style="color: ${color};"><strong>Nome:</strong> ${curso.nome}</li>
  <li><strong>Horas:</strong> ${curso.horas}</li>
  <li><strong>Aulas:</strong> ${curso.aulas}</li>
  <li><strong>Gratuito:</strong> ${curso.gratuito ? 'Sim' : 'Não'}</li>
  <li><strong>Tags:</strong> ${curso.tags.map(tag => 
    `<span>${tag}</span>`
    )}
    </li>
    <li><strong>Aulas:</strong> ${curso.idAulas.map(aula =>
      `<span>${aula}</span>`
      )}
      </li>
      </ul>
      </div>
      `;
}

// ================================================================================

