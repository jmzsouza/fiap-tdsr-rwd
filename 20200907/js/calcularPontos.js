function calcularPontos() {
    const jogadores = document.querySelectorAll('.jogador');

    for (let i = 0; i < jogadores.length; i++) {
        let golsTD = Number(jogadores[i].querySelector('.gols').textContent);
        let assistenciasTD = Number(jogadores[i].querySelector('.assistencias').textContent);
        let finalizacoesTD = Number(jogadores[i].querySelector('.finalizacoes').textContent);
        let passesErradosTD = Number(jogadores[i].querySelector('.passesErrados').textContent);
        let impedimentosTD = Number(jogadores[i].querySelector('.impedimentos').textContent);
        let totalPontos = pontosJogador(golsTD, assistenciasTD, finalizacoesTD, passesErradosTD, impedimentosTD);
        let classificacao = classificarJogador(totalPontos);

        jogadores[i].querySelector('.totalPontos').textContent = totalPontos;
        jogadores[i].querySelector('.classificacao').textContent = classificacao;

    }

    maiorPontuacao();
}

function classificarJogador(totalPontos) {
    if (totalPontos <= 3.0) {
        return 'Jogador Muito Ruim';
    } else if (totalPontos > 3.1 && totalPontos <= 6.0) {
        return 'Jogador Ruim';
    } else if (totalPontos > 6.1 && totalPontos <= 12.0) {
        return 'Jogador Normal';
    } else if (totalPontos > 12.1 && totalPontos <= 19.0) {
        return 'Jogador Bom';
    } else {
        return 'Jogador Excepcional';
    }
}

function pontosJogador(gols, assistencias, finalizacoes, passesErrados, impedimentos) {
    let pontosPositivos = ((Number(gols) * 8) + (Number(assistencias) * 5) + (Number(finalizacoes) * 2.5));
    let pontosNegativos = ((Number(passesErrados) * 0.3) + (Number(impedimentos) * 0.5));
    return ((pontosPositivos - pontosNegativos).toFixed(2))
}

function maiorPontuacao() {

    const jogadores = document.querySelectorAll('.jogador');
    limpaDestaqueVencedor(jogadores);

    let jogador;
    let vencedor = jogadores[0];
    let vencedores = [vencedor];

    for (let i = 1; i < jogadores.length; i++) {
        jogador = jogadores[i];

        if (getTotalPontos(vencedor) < getTotalPontos(jogador)) {
            vencedor = jogador;
            vencedores = []
            vencedores.push(jogador);
        } else if (getTotalPontos(vencedor) === getTotalPontos(jogador)) {
            if (getGols(vencedor) < getGols(jogador)) {
                vencedor = jogador;
                vencedores = [];
                vencedores.push(jogador);
            } else if (getGols(vencedor) === getGols(jogador)) {
                if (getAssistencias(vencedor) < getAssistencias(jogador)) {
                    vencedor = jogador;
                    vencedores = [];
                    vencedores.push(jogador);
                } else if (getAssistencias(vencedor) === getAssistencias(jogador)) {
                    vencedores.push(jogador);
                    let sorteado = Math.floor(Math.random() * vencedores.length);
                    vencedor = vencedores[sorteado];
                }
            }
        }
    }
    vencedor.classList.add('bg-success', 'text-light');
}

function limpaDestaqueVencedor(jogadores) {
    for (let i = 0; i < jogadores.length; i++) {
        jogadores[i].classList.remove('bg-success', 'text-light')
    }
}

function getGols(jogador) {
    return (Number(jogador.querySelector('.gols').textContent));
}

function getAssistencias(jogador) {
    return (Number(jogador.querySelector('.assistencias').textContent));
}

function getTotalPontos(jogador) {
    return (Number(jogador.querySelector('.totalPontos').textContent));
}

calcularPontos();