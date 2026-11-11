// Os Arrays nos permitem agrupar/organizar vários valores em uma única estrutura, formando uma LISTA. Essa lista é organizada de forma ordenada.

// Arrays e Objetos trabalham juntos o tempo todo.

// É comum encontrarmos essa combinação em API's, React, Nodejs, sistemas de cadastro, lojas online, literalmente qualquer aplicação da web.

// Exemplo sem array
let aluno1 = "Rafaela";
let aluno2 = "Adrielli";
let aluno3 = "Thomas";
let aluno4 = "Vanessa";
let aluno5 = "Adail";

// Exemplo com array
// A sintaxe do array no javascript é com brackets - []
const alunos = ["Rafaela", "Adrielli", "Thomas", "Vanessa", "Adail"];

console.log(alunos);

// Acessando informações de um array
console.log("--- Acessando valores ---");
console.log(alunos[2]);
console.log(alunos[3]);

// Acessando uma posição vazia
console.log(alunos[7]);

console.log("--- Descrobrindo tamanho do array ---");
console.log(alunos.length);

// Modificando valores
alunos[5] = "Giulia Hortelã";
console.log(alunos);

// Métodos para manipulação de arrays
const frutas = ["Banana", "Maçã"];

// 1 - push()
// Adiciona um elemento ao FINAL da lista
frutas.push("Pêra");
console.log(frutas);

// Adiciona um elemento ao ÍNICIO da lista
frutas.unshift("Morango");
frutas.unshift("Manga");

// 3 - pop()
// Remove o ÚLTIMO elemento da lista
frutas.pop();

// 4 - shift()
// Remove o PRIMEIRO elemento da lista
frutas.shift();

// Iterando/Percorrendo arrays
console.log("-- Iterando sobre um array --");
console.log("-- Laço for --");

//    Inicialização;      Condição;      Atualização
for (let posicao = 0; posicao < alunos.length; posicao++) {
  const element = alunos[posicao];
  console.log(element);
  console.log(posicao);
}

console.log("-- Laço for...of --");
for (let fruta of frutas) {
  console.log(fruta);
}

// includes() - Verifica se um elemento existe
console.log("-- includes() --");

console.log(frutas.includes("Banana")); // true
console.log(frutas.includes("banana")); // false

// indexOf() - Serve para descobrir a posição de um elemento
console.log("-- indexOf() --");
console.log(frutas.indexOf("Banana"));

console.log(frutas.indexOf("banana"));
// Se o elemento não existir, então ele retorna -1 como resultado

// Métodos com laço de repetição
const notas = [5, 6, 7.2, 7.5, 8, 9, 10];

// filter() - Serve para retornar todos os elementos que atendem a uma determinada condição
console.log("-- filter() --");

notas.filter(function (nota) {
  if (nota >= 7) {
    console.log(nota);
  }
});

// Versão simplificada do filter com arrow function
const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados);

// find() - Diferente do filter, o find ele retorna o primeiro elemento que atende a condição
const resultado = notas.find((nota) => nota >= 7);
console.log(resultado);

// Transformando elementos
const numeros = [2, 3, 4, 5, 6, 7];

// map() - percorre um array e cria um outro array com o resultado aplicado
// Útil quando precisamos preservar o array original
const dobro = numeros.map((numero) => numero * 2);

console.log(dobro);

// Arrays de objetos
const pessoas = [
  {
    nome: "Thomas",
    idade: 18,
    nota: 9,
  },
  {
    nome: "Gustavo",
    idade: 19,
    nota: 6,
  },
  {
    nome: "Adrielli",
    idade: 20,
    nota: 10,
  },
  {
    nome: "Kemilly",
    idade: 17,
    nota: 7.77,
  },
];

pessoas.map((pessoa) => {
  //   console.log(pessoa);
  console.log(`
        Nome: ${pessoa.nome}
        Idade: ${pessoa.idade}
        Nota: ${pessoa.nota}`);
});
