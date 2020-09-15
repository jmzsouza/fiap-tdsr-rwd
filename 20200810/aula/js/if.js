const numero = parseInt(Math.random()*100);
console.log(`Número sorteado=${numero}`);

//If-Else
if(numero % 2 === 0){
    console.log(`O número ${numero} é par`);
} else {
    console.log(`O número ${numero} é impar`);
}

//Switch
const numeroDois = 3;
switch(numeroDois) {
    case 1:
        console.log(`O número informado é o UM`);
        break;
    case 2:
        console.log(`O número informado é o DOIS`);
        break;
    case 3:
        console.log(`O número informado é o TRÊS`);
        break;
    default:
        console.log(`O número informado é OUTROS`);
}