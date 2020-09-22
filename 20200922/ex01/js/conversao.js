const btnCalcular = document.querySelector('#btn-calcular');
const moedaEscolhida = document.querySelector('#moeda-escolhida');
const valorConversao = document.querySelector('#valor-conversao');

btnCalcular.addEventListener('click', function (event) {

    event.preventDefault();

    const valorDigitado = document.querySelector('#valor-real').value;
    const moeda = document.querySelector('#moeda');
    const moedaOption = moeda.children[moeda.selectedIndex];
    const moedaNome = moedaOption.textContent;
    
    const erros = validarDados(valorDigitado, moedaNome);
    console.log(erros);
    if(erros === 0) {
        let valorConvertido = converterMoeda(valorDigitado, moedaNome);
        console.log(valorConvertido);
        moedaEscolhida.textContent = moedaNome;
        valorConversao.textContent = valorConvertido;
    }
});

function validarDados(valorDigitado, moedaNome) {
    let erros = 0;

    if (moedaNome === 'Selecione') {
        erros += 1;
        moedaEscolhida.textContent = 'Moeda inválida';
        valorConversao.textContent = "";
    }
    if (valorDigitado < 0 || isNaN(valorDigitado) || !valorDigitado.trim()) {
        erros += 1;
        moedaEscolhida.textContent = "";
        valorConversao.textContent = 'Valor inválido ou vazio';
    }
    return erros;
}

function converterMoeda(valorDigitado, moedaNome) {
    if (moedaNome === 'Dólar') {
        return (Number(valorDigitado) / 5.40).toFixed(2);
    }
    if (moedaNome === 'Euro') {
        return (Number(valorDigitado) / 6.35).toFixed(2);
    }
    if (moedaNome === 'BitCoin') {
        return (Number(valorDigitado) / 56144.69);
    }
}
