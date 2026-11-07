// Os operadores de comparação no JavaScript servem para comparar dois valores
// Servem para verificar se uma determinada condição é verdadeira(true) ou falsa(false)
// OBSERVAÇÃO: No JavaScript, o resultado de uma comparação é SEMPRE UM VALOR BOOLEANO (true/false).

// 1 - Igualdade Não Estrita ==
// O operador == compara valores, porém, ele não compara os tipos dos valores
console.log(10 == 10)
console.log(10 == '10')
console.log(10 == 0)
console.log("---------")

// 2 - Igualdade estrita ===
// O operador === verifica se os dois valores são iguais tanto em tipo de dado quanto em valores
console.log(10 === 10)
console.log(10 === "10")
// console.log(number 10 === String "10")
console.log(10 === 0)

console.log("---------")

// 3 - Diferença !=
// Esse operador serve para avaliar se os valores são diferentes
console.log(5 != 5)
console.log(5 != "5")

console.log("---------")

// 4 - Diferença estrita !==
// Esse operador serve para avaliar se tanto o valor quanto o tipo de dados são diferentes
console.log(7 !== 3)
console.log(7 !== 7)
console.log(7 !== "7")

console.log("---------")

// 5 - Menor que <
// Esse operador serve para comparar se um elemento é menor que o outro
console.log(7 < 3);
console.log(3 < 3);
console.log(0 < 3);

console.log("---------")

// 6 - Maior que >
// Esse operador serve para comparar se um elemento é maior que o outro
console.log(7 > 3);
console.log(3 > 3);
console.log(0 > 3);

console.log("---------")

// 7 - Maior ou igual >=
// Esse operador serve para avaliar se um número é maior OU igual

console.log(7 >= 3);
console.log(3 >= 3);
console.log(0 >= 3);

console.log("---------")

// 8 - Menor ou igual <=
// Esse operador serve para avaliar se um número é menor OU igual

console.log(7 <= 3);
console.log(3 <= 3);
console.log(0 <= 3);

console.log("---------")
