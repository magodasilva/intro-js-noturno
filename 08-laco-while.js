// While - ENQUANTO uma condição for verdadeira
// Utilizamos esse laço de repetição, quando não sabemos exatamente quantas repetições serão necessárias, mas, geralmente, sabemos a condição de parada.

/* 
    Exemplo de laço infinito

    let contador = 0;
    while(contador <= 5){
        bloco de código que será executado
    }
    // Este é o exemplo de um laço de repetição infinito. Repare que a condição será sempre verdadeira, pois, o valor da variavel contador nunca muda.
*/

// Inicialização
let contador = 0;

// Condição
while (contador <= 5) {
    console.log(contador)

    // Atualizando o valor da variavel contador.
    // O ++ serve para aumentar em uma unidade o valor da variavel
    contador++;
}


// Exemplo prático
// Inicialização
let senha = "";

// condição
while (senha !== "1234") {

    // Atualização da variavel senha
    senha = prompt("Digite sua senha: ");
}

alert("Acesso permitido");
