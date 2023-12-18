// Crie um objeto com os seus dados pessoais
var dadosPessoais = {
  nome: "Diego",
  sobrenome: "Franco",
  idade: 28,
  cidade: "São Paulo",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
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
