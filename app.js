//Mensagem de boas vindas 
alert('Bom...vamos começar? Digite'); 

let Mensagem = 'Olá...Td bem?';
alert(Mensagem);

// Declaração das variáveis 
let numeroSecreto = 29; 
let valorDigitado = prompt('Tente acertar o número secreto escondido entre 1 a 30');


// Verificação para ver se o valor digitado pelo usuário 
// é igual ao número secreto. 
if ( valorDigitado == numeroSecreto){
    console.log(`Nice, o número secreto era ${numeroSecreto}`);
}else{
    alert('Não era esse...Tente novamente!');
}

// Caso contrário é utilizado 'else' que indica quando o valorDigitado 
// é falso, ou seja, não é igual ao númeroSecreto



