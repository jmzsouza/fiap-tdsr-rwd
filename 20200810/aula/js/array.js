//usando construtor
const modoAntigo = new Array('P1','P2','P3');
console.log(modoAntigo);

//modo comum
const personagens = ['Pica-pau','Frajola','Pernalonga','Tom','Jerry'];
console.log(personagens);
console.log(personagens[4]);

//exibir array como se fosse uma tabela
console.table(personagens);

//Alterar o conteúdo dos indices
personagens[1] = 'Piu-piu';
console.log(personagens);

//Inserindo dados no fim do array
personagens.push('Coyote');
console.log(personagens);

//Retirar o último elemento do array
let retiradoFim = personagens.pop();
console.log(personagens);
console.log(`Personagem que foi retirado: ${retiradoFim}`);

//Inserindo no inicio do array
personagens.unshift('Papa-leguas');
console.log(personagens);

//Retirar o primeiro elemento do array
let retiradoInicio = personagens.shift();
console.log(personagens);
console.log(`Personagem que foi retirado: ${retiradoInicio}`);

//Remover itens a partir de uma posição - posicao inicial e qtde de itens a serem excluidos
personagens.splice(2,2);
console.log(personagens);

//Inserir itens a partir de uma posição no array - onde deve iniciar, quantos devem ser apagados, novos elementos
personagens.splice(2,0,'Coyote','Papa-leguas')
console.log(personagens);

//Retirar um elemento mas manter o indice
delete personagens[0];
console.log(personagens);

personagens[0] = 'Patolino';
console.log(personagens);

//Percorrer o array
console.log(personagens.slice(0,3));

//Copiar uma fatia do array
const copiado = personagens.slice(2,4);
console.log(copiado);

//Apontar para o endereço de memória do array - passando por referencia
const personagensUm = personagens;
console.log(personagensUm);

//Quando alterar em um, reflete em outro
personagensUm.pop();
console.log(personagensUm);
console.log(personagens);

personagens.push('Jerry');
console.log(personagensUm);
console.log(personagens);

//Copiar usando spread Operator - não faz referencia
const personagensDois = [...personagens];
console.log(personagensDois);

//Inserir novo elemento apenas no personagemDois
personagensDois.push('Ligeirinho')
console.log(personagensDois);
console.log(personagens);

//Converter um string em array - pode definir a quantidade de elementos
const frase = 'Ao infinito e além';
console.log(frase);

const fraseToArray = frase.split(' ',2);
console.log(fraseToArray);

//Concatenar arrays
const novosPersonagens = ['Superman', 'Homem-Aranha', 'Thor'];
const todosPersonagens = personagens.concat(novosPersonagens,'Mulher Maravilha');
console.log(todosPersonagens);

//Concatenar com spread
const todosPersonagensDois = [...personagens, ...todosPersonagens, ...novosPersonagens, 'Batman', ...['Um','Dois','Três']];
console.table(todosPersonagensDois);