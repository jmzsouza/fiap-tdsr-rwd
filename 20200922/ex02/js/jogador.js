const nomesJogadores = ['Allen', 'Gondo', 'Andrey', 'Thiago', 'Marcelo', 'Israel', 'Sálvio', 'Humberto', 'Alexandre', 'Silva'];

let jogador = Math.floor(Math.random() * 10);
let imagem = document.createElement('img');
imagem.src = './images/' + jogador + '.PNG';
document.querySelector('#foto').appendChild(imagem);

nomeJogador = nomesJogadores[jogador];
document.querySelector('#nome').textContent = nomeJogador;

const velocidade = gerarValorHabilidade();
document.querySelector('.velocidade').textContent = velocidade;

const drible = gerarValorHabilidade();
document.querySelector('.drible').textContent = drible;

const passe = gerarValorHabilidade();
document.querySelector('.passe').textContent = passe;

const chute = gerarValorHabilidade();
document.querySelector('.chute').textContent = chute;

const defesa = gerarValorHabilidade();
document.querySelector('.defesa').textContent = defesa;

const fisico = gerarValorHabilidade();
document.querySelector('.fisico').textContent = fisico;

function gerarValorHabilidade() {
    let valorHabilidade = 50 + Math.floor(Math.random() * 50);
    return valorHabilidade;
}