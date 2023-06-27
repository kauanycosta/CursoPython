// ----------------------------------------------------------------------------------------------------- //
/* 1 - Uma lista iniciando em 0, seguido de 1.
    - Sequência Fibonacci
    - O próximo termo é sempre a soma dos dois anteriores, logo:
    - 0 + 1 = 1
    - 1 + 1 = 2
    - 1 + 2 = 3
    - 2 + 3 = 5
    - 3 + 5 = 8
    - 5 + 8 = 13
    - 8 + 13 = 21
    - 13 + 21 = 34 */
// ----------------------------------------------------------------------------------------------------- //
let count = [];
count[0] = 0;
count[1] = 1;

console.log(`Sequência de Fibonacci:`);
for (var i = 2; i < 10; i++) {
  count[i] = count[i - 2] + count[i - 1];
  console.log(`${count[i-1]} + ${count[i-2]} = ${count[i]}`);
}


// ----------------------------------------------------------------------------------------------------- //
/* 2 - Criar um vetor de 20 números e imprimir na vertical e na horizontal */
//-----------------------------------------------------------------------------------------------------
let vetor;
let i = 0;
for(i=1;i<=20;i++){
    vetor=[i]
    console.log(vetor);

// ----------------------------------------------------------------------------------------------------- //
/* 3 - Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número de 1 a 10.
    - O usuário deve informar o número que ele deseja ver a tabuada.
    Exemplo de saída:
    Tabuada do 5:
    5 x 1 = 5
    . . .
    5 x 10 = 50

    var prompt = require('prompt-sync')();
*/
// -----------------------------------------------------------------------------------------------------
let prompt = require("prompt-sync")();
let numero = prompt("Informe um número para ver a tabuada: ");
mult = 0;
console.log(`Tabuada do ${numero}:`);
for(let i=1;i<=10;i++){
    mult = numero*i;
    console.log(`${numero} x ${i} = ${mult}`);
}
