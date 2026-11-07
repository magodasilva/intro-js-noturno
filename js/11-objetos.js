// Os objetos são uma estrutura de dados que nos permite armazenar várias informações RELACIONADAS dentro de uma ÚNICA variavel

/* 
    const objeto = {
        key: value,
        chave: valor,
        propriedade: valor,
        outraPropriedade: outroValor
    } 
*/


// Exemplo de aplicação
let nome = "Vanessa";
let sobrenome = "da Silva";
let idade = 18;
let email = "vanessa@gameplay.com";
let curso = "JavaScript";
let matriculada = true;

const aluna = {
    nome: "Vanessa",
    sobrenome: "Da Silva",
    idade: 18,
    email: "vanessa10@gameplay.com",
    curso: "JavaScript",
    matriculada: true
}

console.log(aluna);

console.log("--- Acessando informação ---");
// Acessando informações de um objeto
// 1 - Notação de ponto . (dot notation)
console.log(aluna.nome);
console.log(aluna.email);

// 2 - Notação de colchetes [] - Bracket notation
console.log(aluna["nome"]);

console.log("--- Alterando informação ---");
// Modificando informações de um objeto

aluna.email = "vanessa@exemplo.com";
console.log(aluna);

// Adicionando informações a um objeto
console.log("--- Adicionando informação ---");

// Com o dot notation - Notação de ponto .
aluna.nota = 9.37;

// Com bracket notation - Notação de colchetes []
aluna["cidade"] = "São Paulo";

// Removendo informações de um objeto
console.log("--- removendo informação ---");

delete aluna.cidade;

// Objetos com funções(métodos)
console.log("--- objetos com métodos ---");

const pessoa = {
    nome: "Thomas",
    idade: 19,

    apresentar: function(){
        console.log("kkkroi, Léticia né?")
    }
}
pessoa.apresentar();

console.log("--- objetos aninhados ---");

const aluno = {
    nome: "Maria",
    sobrenome: "Elani",
    idade: 18,

    endereco:{
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Carrão",
        cep: "01000-999",
        coordenadas:{
            latitude: "-10238172981",
            longitude: "-1929738172"
        }
    }
}

console.log(aluno.endereco.cidade);
console.log(aluno.endereco.coordenadas.latitude);

// Exemplos reais (Nem tanto)
// Simulando resposta da API
const clima = {
    cidade: "São Paulo",
    temperatura: 25,
    umidade: 75,
    vento: 12
}

console.log(`
    Cidade: ${clima.cidade}
    Temperatura atual: ${clima.temperatura}°C
    umidade: ${clima.umidade} | vento: ${clima.vento}km/h
`);

// métodos úteis para manipular objetos
console.log("--- Métodos para objetos ---");

const produto = {
    nome: "Notebook",
    preco: 7500,
    estoque: 15,
    disponivel: true,
    // chave: valor
}

// 1 - Object.keys()
// retorna uma lista(array) com as chaves(propriedades) de um objeto
console.log(Object.keys(produto));

// 2 - Object.values()
// retorna uma lista(array) com os valores de um objeto
console.log(Object.values(produto));

// 3 - Object.entries()
// retorna uma lista(array) contendo os pares de chave e valor dentro de uma outra lista para cada par.

console.log(Object.entries(produto));


// Iterando sobre um objeto
console.log("--- Iterando com for/in ---");

/*
estrutura de um for...in

for(let propriedade in produto) {
    bloco de código que será executado
}
*/

for(const propriedade in produto){
    console.log(propriedade);
}

// for/in com acesso a valores
for(const propriedade in produto){
    console.log(produto[propriedade]);
}