//pegar o elemento pelo id

//form 1 - trouxe o elemento completo inclusive com sesu descendentes
const herois = document.getElementById('tabela-herois');
console.log(herois);

//forma 2 - 
const heroi1 = document.querySelector('#heroi-um');
console.log(heroi1);

//pegar pela class

//forma 1
const meusHerois = document.getElementsByClassName('heroi');
console.log(meusHerois);
console.log(meusHerois[2]);

//form 2 - 
const nomeHeroi = document.querySelectorAll('.nome');
console.log(nomeHeroi);
console.log(nomeHeroi[3]);

//conteúdo de texto que está no elemento
console.log(nomeHeroi[3].textContent);
nomeHeroi[3].textContent = 'Mulher Maravilha'

//pegar pela tag
//forma 1
const dadosTD = document.getElementsByTagName('td');
console.log(dadosTD);

//forma 2
const dadosTR = document.querySelectorAll('tr');
console.log(dadosTR);
