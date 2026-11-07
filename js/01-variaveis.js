// VARIAVEIS = São identificadores que nos permitem acessar um valor armazenado durante a execução de um programa.

// Pense em uma caixa etiquetada.
// A etiqueta é o nome da variavel
// O conteúdo é o valor que ela representa

// O JavaScript possui três formas de declarar variáveis
// declaração nomeDaVariavel = valor da variavel

// 1 - const
// Utilizamos essa declaração de const, quando não pretendemos atribuir outro valor a nossa variavel depois de inicializar.
const nome = "Mago"
const nomeValue = "Mago"
console.log(nome)


// 2 - let
// Utilizamos essa declaração quando o valor da variavel precisar ser alterado ao longo do programa
let pais = "Brasil"
console.log(pais)

// reatribuindo um valor a variavel
pais = "Portugal"
console.log(pais) 

pais = "Marrocos"
console.log(pais)


// 3 - var (NÃO RECOMENDADO)
// É a forma antiga de declaração. Ainda funciona, mas geralmente deve ser EVITADA em códigos modernos.

var cidade = "São Paulo"
var idade = 24

// Regras para nomear variaveis
// Nomes válidos
let sobrenome;
let idadeUsuario;
let _total;
let $preco;
let quantidade1;

// Nomes inválidos
// let 2nome; /* Começar com números */
// let nome usuario; /* Possuir espaços */
// let let; /* Utilizar palavras reservadas da linguagem */
// let banana-doce; /* Utilizar hífens ( - ) */