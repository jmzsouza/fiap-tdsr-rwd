let total = 0;
for (let i = 0; i <= 9; i++) {
    let numero = Math.floor(Math.random() * 7);
    while (numero === 0) {
        numero = Math.floor(Math.random() * 7);
    }
    total += numero;
    let imagem = document.createElement('img');
    imagem.src = './images/' + numero + '.PNG';
    document.querySelector('#elemento').appendChild(imagem);
}

document.querySelector('#total').innerHTML = `Valor total dos sorteios: ${total}`;