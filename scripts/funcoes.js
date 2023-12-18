// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor) {
  return Boolean(valor);
}

// Crie uma função matemática que retorne o perímetro de um quadrado
function calculaPerimetroQuadrado(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function verificaPar(numero) {
  return numero % 2 === 0;
}

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function getTypeOfData(data) {
  return typeof data;
}

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  var totalPaises = 193; // Adicionei a variável totalPaises aqui
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);
