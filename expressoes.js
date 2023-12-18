function criaPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    andar: function () {
      console.log(`${this.nome} está andando.`);
    },
  };
}

// Instâncias usando a factory function
const pessoa1 = criaPessoa("Diego", 28);
const pessoa2 = criaPessoa("Maria", 25);

//Código Base para exercícios:
var nome = "Diego";
var idade = 26;
var profissao = "Desenvolvedor Front-end";
var comidaFavortita;
comidaFavortita = "pizza";

let senha;
let anoDeNascimento;
let CPF;
let nomeDaMae;
let timeFavorito;

console.log("Olá", nome);
console.log(profissao);
// console.log(CPF); => undefined
var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(frase);

console.log('JavaScript é "super" fácil');
console.log("JavaScript é 'super' fácil");
console.log('JavaScript é "super" fácil');
console.log(`JavaScript é "super" fácil"`);

// Qual o resultado da seguinte expressão? R: 35
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var divisao = "cinquenta" / 2;
var frase = +frase;
console.log(divisao, frase);

// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var incremetado = 5;
console.log(++incremetado);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = +peso / 2; // NaN (Not a Number)
console.log(pesoPorDois);
