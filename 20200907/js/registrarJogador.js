const btnRegistrar = document.querySelector('#btn_registrar');
console.log(btnRegistrar);
btnRegistrar.addEventListener('click', function (event) {

    event.preventDefault();

    const jogadorDigitado = document.querySelector('#form_jogadores');
    console.log(jogadorDigitado);
    const jogador = pegarDadosDigitados(jogadorDigitado);

    function pegarDadosDigitados(jogadorDigitado) {
        const jogador = {
            nome: jogadorDigitado.nome.value,
            gols: jogadorDigitado.gols.value,
            assistencias: jogadorDigitado.assistencias.value,
            finalizacoes: jogadorDigitado.finalizacoes.value,
            passesErrados: jogadorDigitado.passesErrados.value,
            impedimentos: jogadorDigitado.impedimentos.value,
            totalPontos: pontosJogador(this.gols.value, this.assistencias.value, this.finalizacoes.value, this.passesErrados.value, this.impedimentos.value),
            classificacao: classificarJogador(this.totalPontos)
        }

        return jogador;
    }

    const erros = validarJogadores(jogador);

    if (erros.length > 0) {
        exibirMensagemErro(erros);
        return;
    }

    const limparErros = document.querySelector('#mensagens_erro');
    limparErros.innerHTML = "";

    function criaJogadorTR(jogador) {
        const jogadorTR = document.createElement('tr');
        jogadorTR.classList.add('jogador');

        jogadorTR.appendChild(criaJogadorTD(jogador.nome, 'nome'));
        jogadorTR.appendChild(criaJogadorTD(jogador.gols, 'gols'));
        jogadorTR.appendChild(criaJogadorTD(jogador.assistencias, 'assistencias'));
        jogadorTR.appendChild(criaJogadorTD(jogador.finalizacoes, 'finalizacoes'));
        jogadorTR.appendChild(criaJogadorTD(jogador.passesErrados, 'passesErrados'));
        jogadorTR.appendChild(criaJogadorTD(jogador.impedimentos, 'impedimentos'));
        jogadorTR.appendChild(criaJogadorTD(jogador.totalPontos, 'totalPontos'));
        jogadorTR.appendChild(criaJogadorTD(jogador.classificacao, 'classificacao'));

        return jogadorTR;
    }

    function criaJogadorTD(dado, classe) {
        const jogadorTD = document.createElement('td');
        jogadorTD.textContent = dado;
        jogadorTD.classList.add(classe);
        return jogadorTD;
    }

    const novoJogadorTR = criaJogadorTR(jogador);
    const tabela = document.querySelector('#tabela-jogadores');
    tabela.appendChild(novoJogadorTR);
    jogadorDigitado.reset();

    const jogadores = document.querySelectorAll('.jogador');
    console.log(jogadores);

    maiorPontuacao();
});

function validarJogadores(jogador) {
    const erros = [];

    if (jogador.nome.length === 0 || !jogador.nome.trim()) {
        erros.push('O nome está inválido ou vazio')
    }
    if (jogador.gols.length === 0 || isNaN(jogador.gols) || !jogador.gols.trim()) {
        erros.push('Quantidade de gols está inválida ou vazia')
    }
    if (jogador.assistencias.length === 0 || isNaN(jogador.assistencias) || !jogador.assistencias.trim()) {
        erros.push('Quantidade de assitências está inválida ou vazia')
    }
    if (jogador.finalizacoes.length === 0 || isNaN(jogador.finalizacoes) || !jogador.finalizacoes.trim()) {
        erros.push('Quantidade de finalizações está inválida ou vazia')
    }
    if (jogador.passesErrados.length === 0 || isNaN(jogador.passesErrados) || !jogador.passesErrados.trim()) {
        erros.push('Quantidade de passe errados está inválida ou vazia')
    }
    if (jogador.impedimentos.length === 0 || isNaN(jogador.impedimentos) || !jogador.impedimentos.trim()) {
        erros.push('Quantidade de impedimentos está inválida ou vazia')
    }
    return erros;
}

function exibirMensagemErro(erros) {
    const ul = document.querySelector('#mensagens_erro');
    ul.innerHTML = "";

    erros.forEach((erro) => {
        const li = document.createElement('li');
        li.textContent = erro;
        li.classList.add('alert', 'alert-info');
        ul.appendChild(li);
    });

}