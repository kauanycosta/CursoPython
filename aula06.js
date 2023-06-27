// ----------------------------------------------------------------------------------------------------- //
/* 1 - Exemplo utilizando while == enquanto. */
// ----------------------------------------------------------------------------------------------------- //
let i =0 
while (i<10) {
    console.log(`ola`);
    i++;
}


// ----------------------------------------------------------------------------------------------------- //
/* 2 - Exemplo utilizando do while == faça enquanto. */
// ----------------------------------------------------------------------------------------------------- //
let i = 0;
do {
    console.log(`ola`);
    i++;
} while (i<10)


// ----------------------------------------------------------------------------------------------------- //
/* npm install --save prompt-sync-history */
/* colar no terminal e dar enter, serve para receber dados do usuário */
/* depois usar npm install prompt-sync */
// ----------------------------------------------------------------------------------------------------- //
let prompt = require("prompt-sync")();
let idade = prompt("Qual a sua idade?");

if (idade > 18) {
    console.log('bem vindo!');
}


// ----------------------------------------------------------------------------------------------------- //
/* 3 - A partir do vetor [2,4,1,6,1,5], printar se existe valores repetidos ou não. */
// ----------------------------------------------------------------------------------------------------- //
let vetor = [2,4,1,6,1,5];
let i = 0, j=0;
let resposta = 0; 

for (i=0;i<(vetor.length);i++) {
    let cont = vetor[i];
    let posicao = i;
    for (j=1;j<(vetor.length);j++) {
        if (vetor[j] != cont) {
            resposta = 0;
        }
        else if (vetor[j]==cont && posicao != j) {
            resposta = 1;
            break;
        }
    }
    if (resposta == 1) {
        break;
    }
}
if (resposta==1){
    console.log(`Existem valores repetidos!`);
} else if (resposta == 0 ) {
    console.log(`Não existem elementos repetidos!`);
}

// ----------------------------------------------------------------------------------------------------- //
/* 4 - Mostrar apenas numeros nao primos. */
// ----------------------------------------------------------------------------------------------------- //
const numero = 20;
let i = 0, j = 0;
let cont = 0;

for (i=1;i<=numero;i++) {
    for (j=2;j<=numero;j++) {
        if (i%j==0) {
            cont++;
            if (cont==1 && i!=j) {
                console.log(`Esse número não é primo: ${i}`);
            }
        }
    }
    cont = 0;
}

// ----------------------------------------------------------------------------------------------------- //
/* 5 - Apresente a media dos valores de um vetor. */
// ----------------------------------------------------------------------------------------------------- //
let vetor = [2,4,1,6,1,5];
let soma = 0;
let c = 0, i = 0;
let divisor = vetor.length;
let media = 0;

for (i=0;i<(vetor.length);i++){
    soma = soma + vetor[c];
    c++;
}
media = soma/divisor;
console.log(`A media dos números no vetor é: `, media.toFixed(2));
