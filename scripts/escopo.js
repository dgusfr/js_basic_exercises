// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
//console.log(var, marca, portas);

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total1 = 10 * numero;
console.log(total);

//******************************RESPOSTAS******************************

// 1. Erros no código:
//No console.log, você está tentando acessar as variáveis var, marca, e portas fora do bloco de escopo onde foram declaradas.
Correção: {
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
}
console.log(cor, marca, portas);

//2. Erro nas funções:
function somarDois(x) {
  const dois = 2;
  return x + dois;
}

function dividirDois(x) {
  return x + dois; // 'dois' não está definido neste escopo
}

somarDois(4);
dividirDois(6);

// Motivo do erro:
// A variável dois está definida apenas no escopo da função somarDois, não podendo ser acessada na função dividirDois.
Correção: function somarDois(x) {
  const dois = 2;
  return x + dois;
}

function dividirDois(x) {
  const dois = 2; // Defina 'dois' dentro deste escopo
  return x / dois; // Corrija a operação para dividir por dois
}

somarDois(4);
dividirDois(6);

// 3. Total retornando 500:
var numero = 50;

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total2 = 10 * numero; // Aqui 'numero' foi redefinido pelo loop
console.log(total);

//Solução para total retornar 500:
var numero = 50;
let total;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

total = 10 * numero;
console.log(total);
