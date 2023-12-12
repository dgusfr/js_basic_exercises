// Crie uma função para verificar se um valor é Truthy
function verifica(numero) {
  return Boolean(numero);
}
numero = 25;

// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetro(base) {
  return base + base + base + base;
}
perimetro(6);

// Crie uma função que retorne o seu nome completo
function nomeCompleto(nome, sobrenome) {
  return nome + sobrenome;
}
nomeCompleto("Diego", "Franco");

// Crie uma função que verifica se um número é par
function verificaPar(n) {
  if (n % 2 == 0) {
    return "É Par";
  } else {
    return "É Impar";
  }
}
verificaPar(6);

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function getTypeOfData(data) {
  return typeof data;
}
//_______________________________________________________________________;

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {
  console.log("Diego Franco");
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
var totalPaises = 193;
precisoVisitar(20);
jaVisitei(20);

// Crie um objeto com os seus dados pessoais
var dadosPessoais = {
  nome: "Diego",
  sobrenome: "Franco",
  idade: 26,
};
// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raça: "Labrador",
  idade: "10 anos",
  cor: "preto",
  latir(pessoa) {
    if (pessoa == "Homem") {
      return Latir;
    } else {
      return "Nada";
    }
  },
};

//_____________________________________________________;

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < copasBrasil.length; i++) {
  console.log("O Brasil ganhou a copa de: " + copasBrasil[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);

//_____________________________________________________;

// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito, caso o cliente possua carro e casa. E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

var darCredito = possuiCarro && possuiCasa ? "Dar credito" : "Não dar credito";

//escopo global
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
