const num1 = 2828282.5859505;
console.log(num1);

//casas decimais
console.log(num1.toFixed(2));

//arredondar para o próximo inteiro
console.log(Math.ceil(num1));

//arredondar para o inteiro anterior
console.log(Math.floor(num1));

//arredondar para o próximo inteiro - quando casas decimais valor maior que 50
//arredondar para o inteiro anterior - quando casas decimais valor menor que 50
console.log(Math.round(num1));

//maior valor em um conjunto
console.log(Math.max(449,554,23,9382,389,323));

//menor valor em um conjunto
console.log(Math.min(449,554,-23,9382,389,323));

//raiz quadrada
console.log(Math.sqrt(25));

//raiz cubica
console.log(Math.cbrt(27));

//potencia
console.log(2**10);
console.log(Math.pow(2,10));

//sortear um número entre 0 e 1
let numeroSorteado = Math.random();
console.log(numeroSorteado);

//sortear um número entre 0 e 10
numeroSorteado = Math.random()*10;
console.log(numeroSorteado);

//sortear número sem casas decimais
numeroSorteado = Math.round(Math.random()*100);
console.log(numeroSorteado);

numeroSorteado = parseInt(Math.random()*100);
console.log(numeroSorteado);