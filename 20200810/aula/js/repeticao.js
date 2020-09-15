//FOR
for (let index = 0; i < 10; i++) {
    console.log(`Contagem em ${i}`);   
}

//WHILE
let numeroSorteado = (parseInt(Math.random()*61));
let tentativasSorteio = 1;

while(numeroSorteado != 22){
    (parseInt(Math.random()*61));
    tentativasSorteio++;
}
console.log(`O ${numeroSorteado}. Foram efetuadas ${tentativasSorteio} tentativas.`);


//DO WHILE
let valor = 0;
do {
    console.log(`O valor está em: ${valor}`);
    valor++;
} while (valor <=5);

