
// string é indexada
const texto = 'JavaScript é uma linguaguem de programação';
console.log(texto);

//tamanho da string
console.log(`Tamanho da String ${texto.length} caracteres`);

//letras maiúsculas
console.log(`Todas maiúsculas: ${texto.toUpperCase()}`);

//letras minúsculas
console.log(`Todas minúsculas: ${texto.toLowerCase()}`);

//exibir conteúdo de um indice da string
console.log(`Caracter da string na posição 10: ${texto.charAt(10)}`);
console.log(`Caracter da string na posição 10: ${texto[10]}`);

//buscar uma substring
console.log(`Procurar por progr ${texto.indexOf('progr')}`);

//retorna -1 quando não encontra um caracter na string
console.log(`Procurar por # ${texto.indexOf('#')}`);

//pegar parte da string
console.log(`Pegando conteúdo entre 3,8 = ${texto.slice(3,8)}`);

//copiar para uma variável
//caso não defina o segundo parâmetro ele vai até o final da string
const stringCopia = texto.slice(3,8);
console.log(stringCopia);

//separar uma string por caracter - no exemplo vou usar os espaços
//será gerado um novo array
const stringSeparada = texto.split(' ');
console.log(stringSeparada);

//será gerado um novo array, definir quantos índices deseja
const stringSeparada2 = texto.split(' ',3);
console.log(stringSeparada2);

//substituir um elemento na string
console.log(`Substituir a primeira letra A que ele encontrar: ${texto.replace('a','@')}`)

//substituir todos com expressão regular
//na expressão o  'i' pega letras maiúsculas e minúsculas e o 'g' para todas as ocorrências da string
console.log(`Substituir todas as letras A: ${texto.replace(/a/ig,'@')}`);

//substituindo inclusive com caracteres acentuados
console.log(`Substituir com acentos ${texto.replace(/[a,\xE0-\xE6]/ig,"@")}`);


let numero = 10.53453338383838;
console.log(numero, typeof(numero));
//converter Number em String
numero = numero.toString();
console.log(numero, typeof(numero));