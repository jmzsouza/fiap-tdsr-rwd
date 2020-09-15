//pegar o botão calcular
const btnCalcular = document.querySelector('#calcular');

//adicionar ao botão um escutador de eventos
btnCalcular.addEventListener('click', CalcularXP);

function CalcularXP() {

    //pegar todos os elementos com a classe heroi
    const herois = document.querySelectorAll('.heroi');

    // percorrer o array de herois
    for (let i = 0; i < herois.length; i++) {
        //pegar dados para calcular o xp
        //todas as informações vem no formato STRING, necessário converter para NUMBER
        let velocidadeTD = Number(herois[i].querySelector('.velocidade').textContent);
        let agilidadeTD = Number(herois[i].querySelector('.agilidade').textContent);
        let forcaTD = Number(herois[i].querySelector('.forca').textContent);

        //calcular o xpFinal
        let xpFinal = (velocidadeTD + agilidadeTD + forcaTD);

        herois[i].querySelector('.xp-final').textContent = xpFinal;

        if (xpFinal < 250) {


            //forma legal 
            herois[i].classList.add('bg-warning', 'text-light');
        }


    }

}