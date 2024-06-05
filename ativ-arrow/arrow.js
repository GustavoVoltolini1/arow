/* PESQUISA SOBRE ARROW FUNCTION*/

/* É uma forma resumida de escrever uma função em JavaScript, uma maneira de como as variáveis são vistas no código, deixando elas mais otimizadas e mais legíveis.

As arrow functions não possuem a palavra-chave “function” , também permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavra return.*/


/* ----------------------------------------------------*/

// Exemplo basico

const arrowFunction = (exemplo1, exemplo2) => {
  return exemplo;
};

/* ----------------------------------------------------*/

// 1)
const dobrarNumeros = (numeros) => {
  return numeros.map(numero => numero * 2);
};

// Exemplo na pratica
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = dobrarNumeros(numeros);
console.log(numerosDobrados); 

/* ----------------------------------------------------*/

// 2)
const ordenarPorComprimento = (palavras) => {
  return palavras.sort((a, b) => a.length - b.length);
};

// Exemplo na pratica
const palavras = ["4444", "1", "55555", "22", "333"];
const palavrasOrdenadas = ordenarPorComprimento(palavras);
console.log(palavrasOrdenadas); 

/* ----------------------------------------------------*/

// 3)

const filtrarNumerosPares = (numeros) => {
  return numeros.filter(numero => numero % 2 === 0);
};

// Exemplo na pratica
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarNumerosPares(numeros2);
console.log(numerosPares); 


