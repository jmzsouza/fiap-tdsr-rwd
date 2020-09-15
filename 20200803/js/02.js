
const valor1 = 10;
const valor2 = 2;
let resultado = 0;

//operadores aritméticos
//adição
resultado = (valor1 + valor2);
console.log(`${valor1} + ${valor2} = ${resultado}`);

//subtração
resultado = (valor1 - valor2);
console.log(`${valor1} - ${valor2} = ${resultado}`);

//multiplicação
resultado = (valor1 * valor2);
console.log(`${valor1} * ${valor2} = ${resultado}`);

//divisão
resultado = (valor1 / valor2);
console.log(`${valor1} / ${valor2} = ${resultado}`);

//mod
resultado = (valor1 % valor2);
console.log(`${valor1} % ${valor2} = ${resultado}`);

//potência
resultado = (valor1 ** valor2);
console.log(`${valor1} ** ${valor2} = ${resultado}`);

//operador de incremento
let contador = 0;
console.log(`O valor do contador é ${contador}`);
contador++;
console.log(`O valor do contador é ${contador}`);

//operador de decremento
contador--;
console.log(`O valor do contador é ${contador}`);


//operadores de atribuição
contador+=20;
console.log(`O valor do contador é ${contador}`);

contador-=20;
console.log(`O valor do contador é ${contador}`);

contador*=20;
console.log(`O valor do contador é ${contador}`);

contador/=20;
console.log(`O valor do contador é ${contador}`);



let v1 = 10;
let v2 = 20;
resultado = v1 + v2
console.log(resultado);

//operacao pós-fixada - primeiro calcula e depois incrementa
resultado = v1++ + v2++;
console.log(resultado);
console.log(v1);
console.log(v2);

v1 = 10;
v2 = 20;
resultado = v1 + v2
console.log(resultado);

//operacao pré-fixada - primeiro incrementa e depois calcula
resultado = ++v1 + ++v2;
console.log(resultado);
console.log(v1);
console.log(v2);

//operadores relacionais - comparar variáveis - retorno true / false
console.log(v1);
console.log(v2);

resultado = (v1 > v2);
console.log(`${v1} > ${v2} = ${resultado}`);

resultado = (v1 < v2);
console.log(`${v1} < ${v2} = ${resultado}`);

resultado = (v1 >= v2);
console.log(`${v1} >= ${v2} = ${resultado}`);

resultado = (v1 <= v2);
console.log(`${v1} <= ${v2} = ${resultado}`);

resultado = (v1 == v2);
console.log(`${v1} == ${v2} = ${resultado}`);

resultado = (v1 != v2);
console.log(`${v1} != ${v2} = ${resultado}`);


v1 = 20;
v2 = '20';
//=== verifica se são iguais e se têm o mesmo tipo
resultado = (v1 === v2);
console.log(`${v1} === ${v2} = ${resultado}`);

//!== verifica a desigualdade e se têm o mesmo tipo
resultado = (v1 !== v2);
console.log(`${v1} !== ${v2} = ${resultado}`);

//operadores lógicos
//unir expressões e retornar true / false

v1 = 20;
v2 = 10;

//operador || - basta 1 ser verdadeiro para resultado ser verdadeiro
resultado = ((v1 === v2) || (v1 > v2))
console.log(`${v1} === ${v2} || ${v1} > ${v2} = ${resultado}`);

//operador && - basta 1 ser verdadeiro para resultado ser verdadeiro
resultado = ((v1 === v2) && (v1 > v2))
console.log(`${v1} === ${v2} && ${v1} > ${v2} = ${resultado}`);

//operador ! - negação
resultado = !((v1 === v2) || (v1 > v2))
console.log(`!(${v1} === ${v2} || ${v1} > ${v2}) = ${resultado}`);