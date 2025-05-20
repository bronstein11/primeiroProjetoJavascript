alert("Boas-vindas ao jogo do Número Secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 0;



while (chute != numeroSecreto) {  // enquanto o chute não for o número secreto, reinicia
    chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
    tentativas++;

    if (chute == numeroSecreto) {   // se chute for igual ao numero secreto
        break;
    }
    else { 
        if (chute > numeroSecreto) { // ou se chute for maior que o numero secreto
            alert(`O número secreto é menor que ${chute}`);
        }
    else { // ou se chute for menor que o numero secreto
        alert(`O número secreto é maior que ${chute}`);
    }
  }  
}

let palavraTentativas = tentativas > 1 ?  "tentativas" : "tentativa";

alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas} !!! `); 
