// -----------------------------------------------------------------------------------------------------
/* 1 - Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares
    e a quantidade de números ímpares. */
//-----------------------------------------------------------------------------------------------------

let i = 0;
let countpar = 0;
let countimpar = 0;

for(i=1;i<=10;i++){
    let prompt = require("prompt-sync")();
    let numero = prompt("Informe um número: ");
    if (numero%2==0){
        countpar++;;
    }
    else if (numero%2 != 0) {
        countimpar++;
    }
}
console.log(`A quantidade de ímpares é: ${countimpar}`);
console.log(`A quantidade de pares é: ${countpar}`);

// -----------------------------------------------------------------------------------------------------
/* 2 - Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado
    ao segundo.*/
//-----------------------------------------------------------------------------------------------------

let prompt = require("prompt-sync")();
let numero1 =  prompt("Informe o primeiro número: ");
let numero2 = prompt("Informe o segundo número: ");
let mult = numero1;
let i = 0;

for (i=1;i<numero2;i++){
    // mult = numero1*numero1;
    mult = mult*numero1;
}
console.log(mult);

// -----------------------------------------------------------------------------------------------------
/* 3 - Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e
    o valor médio gasto em cada um deles.
    O usuário deverá informar a quantidade de CDs e o valor para em cada um*/
//-----------------------------------------------------------------------------------------------------
let prompt = require("prompt-sync")();
let quantidade = prompt("Informe a quantidade de CDs: ");
var total = 0;
for(let i=1;i<=quantidade;i++){
    let prompt = require("prompt-sync")();
    var valor = prompt(`Informe o valor do CD ${i}: R$`);
    total = total+(parseInt(valor));
}
console.log(`O valor total gasto pelo colecionador foi: ${total}`);
console.log(`Ele gastou em dia R$${(total/quantidade).toFixed(2)} em cada um de seus CDs!`);
