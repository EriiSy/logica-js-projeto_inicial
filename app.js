//Mensagem de boas vindas 
alert('Bom...vamos começar? Digite'); 

let Mensagem = 'Olá...Td bem?';
alert(Mensagem);

const VALOR_INICIAL = 1;
const VALOR_FINAL = 1000;
const COMPLEMENTO = 1;

// Declaração das variáveis 
let numeroSecreto = parseInt(Math.random()* VALOR_FINAL +  COMPLEMENTO ); 
console.log(numeroSecreto); 
let valorDigitado 
let tentativas = 1;

while(valorDigitado != numeroSecreto){
   valorDigitado = prompt(`Tente acertar o número secreto escondido entre ${VALOR_INICIAL} e ${VALOR_FINAL}`);
    
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
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Nice, você encontrou o número secreto com ${tentativas} ${palavraTentativa}\nN.S: ${numeroSecreto}`);





