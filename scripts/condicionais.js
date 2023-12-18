// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 28;
var idadeParente = 25;

if (minhaIdade > idadeParente) {
  console.log("É maior");
} else if (minhaIdade === idadeParente) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao); // 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes.");
} else if (brasil === china) {
  console.log("Brasil e China têm o mesmo número de habitantes.");
} else {
  console.log("China tem mais habitantes.");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro"); // Não será executado, pois a condição é falsa
} else {
  console.log("Falso"); // Será executado, pois a condição é falsa
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // 'Cão' (o último valor verdadeiro)
} else {
  console.log("Falso"); // Não será executado, pois a condição é verdadeira
}
