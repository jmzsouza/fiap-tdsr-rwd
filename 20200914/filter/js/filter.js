// retornar os numeros menores que 30
const numeros = [12, 5, 8, 7, 78, 99, 44, 57, 72, 125, 178, 258, 7, 64, 21]
console.log(numeros);

// filter apenas em arrays - não altera o array inicial
const numFiltrados = numeros.filter(numerosFiltrados);
console.log(numFiltrados);

// função de callback
function numerosFiltrados(valor) {
    return valor < 30;
}

// com função anonima - uso mais comum
const numFilter = numeros.filter(function (valor) {
    return valor < 60;
});
console.log(numFilter);

// filter com arrow function
const numerosFilter = numeros.filter((valor) => {
    return valor < 90;
});
console.log(numerosFilter);

// simplificando a arrow function - nesse caso temos apenas 1 linha
const numberFilter = numeros.filter(valor => valor > 100);
console.log(numberFilter);

// filter completo com arrow function
// retorna = valor - indice - array
const numberF = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor < 50;
})
console.log(numberF);

const pessoas = [{
        nome: 'Eu',
        idade: 32,
        email: 'teste@teste'
    },
    {
        nome: 'Tu',
        idade: 22,
        email: 'teste@aaaa'
    },
    {
        nome: 'Ele',
        idade: 52,
        email: 'teste@bbbb'
    },
    {
        nome: 'Nós',
        idade: 42,
        email: 'teste@cccc'
    },
    {
        nome: 'Vós',
        idade: 62,
        email: 'teste@dddd'
    },
    {
        nome: 'Eles',
        idade: 72,
        email: 'teste@eeee'
    }
];

const idadePessoas = pessoas.filter(obj => obj.idade > 50);
console.log(idadePessoas);