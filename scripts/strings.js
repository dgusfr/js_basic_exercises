// 1. Utilizando o foreach no array abaixo, some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

// 2. Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

// 3. Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

// 4. Retorne o último caracter da frase
const frase = "Melhor do ano!";

// 5. Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

//************************RESPOSTAS******************************
//1.

let taxaTotal = 0;
let valorRecebimento = 0;
transacoes.forEach((item) => {
  const numeroLimpo = item.valor.replace("R$ ", "");
  if (item.descricao.includes("Taxa")) {
    taxaTotal = taxaTotal + numeroLimpo;
  } else if (item.descricao.slice(0, 4) === "Rece") {
    valorRecebimento += numeroLimpo;
  }
});

console.log(`O valor da taxa é de ${taxaTotal}`);
console.log(`O valor total recebido é de ${valorRecebimento}`);

//2.
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

//3.
html = html.split("spam").join("a");
console.log(html);

//4.
console.log(frase.slice(-1));

//5.
let taxaT = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase();
  item.trim();
  if (item.slice(0, 4) === "taxa") {
    taxaT++;
  }
});

console.log(taxaT);
