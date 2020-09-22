// Map == Filter - diferença está no retorno final
// Filter não altera valores do array - Map pode alterar conforme permitir
// Map retorna um Array exatamente do mesmo tamanho do original
// Map também recebe uma função de callback - valor - indice e o array

// triplicar os valores de um Array
const numeros1 = [3,4,5,6,7,8,9,1,2,0];
console.log(numeros1);

// const triplo = numeros1.map(function(valor){
//     return valor * 3;
// })
// console.log(triplo);

//usando arrow function
const triplo = numeros1.map((valor) =>{
    return valor * 3;
})
console.log(triplo);

//Outro exemplo
const series = [
    {titulo: 'The Boys', streaming: 'Amazon Prime'},
    {titulo: 'Mindhunter', streaming: 'Amazon Netflix'},
    {titulo: 'Homeland', streaming: 'Amazon Prime'},
    {titulo: 'Dark', streaming: 'Netflix'},
    {titulo: 'Years & Years', streaming: 'HBO'},
    {titulo: 'Chernobyl', streaming: 'HBO'},
];
console.log(series);

const titulos = series.map((obj)=>{
    return obj.titulo;
})
console.log(titulos);


console.log('----------REMOVER VALORES----------');
// remover a chave de titulos retornando apenas um objeto com a chave de streaming
const plataformas = series.map((obj)=>{
    // retorna um objeto igual
    // return obj;

    // forma 1 - aponta para o mesmo objeto - atribuição referência
    // obj.titulo;
    // return obj;

    // forma 2 - retornando um objeto novo apenas com as plataformas
    return {plataformas:obj.streaming};
})

console.log(plataformas);
console.log(series);

console.log('----------ADICIONAR VALORES----------');
// adicionar um id com indice
const insereID = series.map((obj, indice)=>{

    // forma 1 - aponta para o mesmo objeto - atribuição referência
    // obj.id = indice;
    // return obj;

    //forma 2 - criar um novo objeto - fazer spread (...)
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})

console.log(insereID);
console.log(series);

console.log('----------ADICIONAR VALORES----------');