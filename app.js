//Mensagem de boas vindas 
alert('Bom...vamos começar? Digite'); 

let Mensagem = 'Olá...Td bem?';
alert(Mensagem);

// Declaração das variáveis 
let numeroSecreto = 50; 
let valorDigitado 
let tentativas = 1;

while(valorDigitado != numeroSecreto){
   valorDigitado = prompt('Tente acertar o número secreto escondido');
    
// Verificação para ver se o valor digitado pelo usuário 
// é igual ao número secreto ou não. Caso não seja
// O Usuário receberá dicas 

   if ( valorDigitado == numeroSecreto){
        break;
   }else{
        tentativas++;
        if (numeroSecreto > valorDigitado){
            alert(`O numéro secreto é maior que ${valorDigitado}`);
        }else{
            alert(`O número secreto é menor que ${valorDigitado}`);
        }
        
}
}
// Operador Ternário 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';

alert(`Nice, o número secreto era ${numeroSecreto}\nTentativas: ${palavraTentativa}`);





