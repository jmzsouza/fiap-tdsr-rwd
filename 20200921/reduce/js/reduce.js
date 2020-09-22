// a idéia é reduzir a um único valor
// com reduce dá pra fazer filter, map - mas cuidado

// somar todos os valores
const numero1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(numero1);

// somando os valores
const total = numero1.reduce((acumulador, valor, indice, array)=>{
    return acumulador += valor;
},0)
console.log(total);

// passar um array como acumulador
const arrayPar = numero1.reduce((acumulador, valor)=> {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
},[]);
console.log(arrayPar);


// retornar um array com valores multiplicados por 10
const arrayMultiplicado = numero1.reduce((acumulador, valor)=>{
    acumulador.push(valor * 10);
    return acumulador;
},[]);
console.log(arrayMultiplicado);

// retornar o produto mais caro
const produtos = [
    {tipo: 'AAAA', preco: 123},
    {tipo: 'BBBB', preco: 456},
    {tipo: 'CCCC', preco: 789},
    {tipo: 'DDDD', preco: 987},
    {tipo: 'EEEE', preco: 654},
    {tipo: 'FFFF', preco: 321},
];
console.log(produtos);

const maisCaro = produtos.reduce((acumulador, valor) =>{
    if(acumulador.preco > valor.preco) {
        return acumulador;
    } else {
        return valor;
    }
});
console.log(maisCaro);

// juntando filter + map + reduce
const novosNumeros = [23,56,78,12,34,9,2,3,11,98,87,65,9,4,6,25,84,79,20,65,42,83];
console.log(novosNumeros);

// filtrando para exibir os impares
// dobra os valores que filtrou
// somar todos os valores

const juntandoTudo = novosNumeros.filter((valor)=>{
    return valor % 2 === 1;
}).map((valor)=>{
    return valor * 2;
}).reduce((acumulador, valor)=>{
    return acumulador + valor;
},0)
console.log(juntandoTudo);