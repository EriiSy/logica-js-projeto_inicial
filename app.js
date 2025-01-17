alert('Bom...vamos começar? Digite'); 

let Mensagem = 'Olá...Td bem?';
alert(Mensagem);

let numeroSecreto = 29; 
let valorDigitado = prompt('Tente acertar o número secreto escondido entre 1 a 30');


if ( valorDigitado == numeroSecreto){
    console.log('Nice, o número secreto era');
}

if (valorDigitado != numeroSecreto){
    alert('Não era esse...Tente novamente!');
}


