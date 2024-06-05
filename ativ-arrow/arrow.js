/* PESQUISA SOBRE ARROW FUNCTION*/

/* É uma forma resumida de escrever uma função em JavaScript, uma maneira de como as variáveis são vistas no código, deixando elas mais otimizadas e mais legíveis.

As arrow functions não possuem a palavra-chave “function” , também permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavra return.*/

/* ----------------------------------------------------*/

// 1)
/* Primeiro agente defini a função dobrarNumeros que recebe numeros, depois faz o "return" que retorna onde cada numero foi dobrado*/

const dobrarNumeros = (numeros) => {
  return numeros.map(numero => numero * 2);
};

/*Declara a função numeros e incia o array de numeros e guarda dentro da "dobrarNumeros"*/
// Executar as atividades
function executar1() {
  const numeros = [1, 2, 3, 4, 5];
  const numerosDobrados = dobrarNumeros(numeros);
  alert(numerosDobrados); 
}
/* ----------------------------------------------------*/

/*Defini a função "ordenarPorComprimento"que recebe "palavras", depois o "return palavras.sort" ordena pelo tamanho da palavra*/
// 2)
const ordenarPorComprimento = (palavras) => {
  return palavras.sort((a, b) => a.length - b.length);
};

/*Declara a variavel palavra começa um array, depois a função "ordenarPorComprimento" recebe "palavras", e ordena as palavras de acordo com seu comprimento*/
// Executar as atividades
function executar2() {
  const palavras = ["4444", "1", "55555", "22", "333"];
  const palavrasOrdenadas = ordenarPorComprimento(palavras);
  alert(palavrasOrdenadas); 
}

/* ----------------------------------------------------*/

/*Declara a função "filtrarNumerosPares" que recebe numeros, e retorna um novo array com numeros pares*/
// 3)
const filtrarNumerosPares = (numeros) => {
  return numeros.filter(numero => numero % 2 === 0);
};


// Executar as atividades
function executar3() {
  const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosPares = filtrarNumerosPares(numeros2);
  alert(numerosPares); 
}

