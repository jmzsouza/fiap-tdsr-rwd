console.log('Olá 1TDSR bom retorno a todos');
document.write('Olá! Usando JS.');

alert('Olá! Usando JS.');

// variáveis
// JS não é tipável
// nome de váriavel também é case sensitive
// não permite que uma variável seja declarada novamente
// varíavel const não pode sofrer alteração, já a let pode ter o valor alterado.
let nome = "Jonas M.";
let idade = 32;
let salario = 1000.00;
let aluno = true;
const CPF = "123.456.789-00"

console.log('Nome:', nome);
console.log('Idade:', idade);
console.log('Salário:', salario);
console.log('Aluno:', aluno);


//template string
console.log(`Eu sou o ${nome} e minha idade é ${idade}, tenho o salário de ${salario}. Eu sou um aluno? ${aluno}`);
console.log(`CPF: ${CPF}`)

//tipo da variável
console.log(typeof(nome));
console.log(typeof(idade));
console.log(typeof(salario));
console.log(typeof(aluno));

