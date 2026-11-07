// O JavaScript possui 8 tipos de dados, sendo 7 deles, os tipos primitivos
// TIPOS PRIMITIVOS = Dados básicos da linguagem

// 1 - String - TEXTOS
// O tipo String representa sequencias de caracteres
// Ou seja, nomes, mensagens, endereços, emails e textos em geral.

const nome = "Mago"
const cidade = 'São Paulo'
const mensagem = `Olá, fulan`

console.log(nome)
console.log(cidade)
console.log(mensagem)

// 2 - Number - NÚMEROS
// O JavaScript utiliza o tipo Number para números inteiros e decimais.
const idade = 24
const altura = 1.75
const preco = 49.90
const temperatura = -5.70

console.log(idade);
console.log(altura);
console.log(preco);
console.log(temperatura);

// 3 - BigInt
// O tipo bigint permite representar inteiros maiores que o limite de precisão dos números inteiros comuns do tipo Number

const numeroGrande = 18273174012984712182761902n
// O "n" no final do número serve para indicar que o número deve ser tratado como bigint
console.log(numeroGrande)


// 4 - Boolean
// O Tipo boolean representa apenas dois valores
// True - Verdadeiro (1)
// False - Falso (0)

// É muito utilizado para verificar condições, controlar funcionalidades e representar dados

const estaLogado = true
const temPermissao = false

console.log(estaLogado)
console.log(temPermissao)


// 5 - Undefined (Indefinido)
// Representa um valor que não foi definido.
// É comum encontrar quando uma variável foi declarado sem receber um valor inicial
let fruta;

console.log(fruta)

// 6 - Null
// Representa a ausencia intencional de um valor.
// No exemplo abaixo, estamos indicando de forma explicita que não há uma foto de perfil associada naquele momento
let fotoPerfil = null;
console.log(fotoPerfil)

fotoPerfil = "foto-perfil.png"
console.log(fotoPerfil)


// 7 - Symbol
// Utilizamos esse elemento para criar Identificadores Únicos
const id1 = Symbol("id")
const id2 = Symbol("id")

console.log(id1 === id2)