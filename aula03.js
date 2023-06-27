// // ----------------------------------------------------------------------------------------------------- // //
/* 1- Calcular reajuste de salário:
    - de R$0 à R$400.00         15%
    - de R$400.01 à R$800.00    12
    - de R$800.01 à R$1200      10
    - de R$1200.01 à R$2000     7
    - acima de R$2000           4
*/
// ----------------------------------------------------------------------------------------------------- // //
const salarioAntigo = 400;
let salarioNovo = 0;
let reajuste = 0; 

if (salarioAntigo>0 && salarioAntigo<=400) {
    reajuste = ((salarioAntigo*15)/100);
    salarioNovo = salarioAntigo+reajuste;    
    console.log(`Novo salário: R$${salarioNovo}\nReajuste ganho: R$${reajuste}\nEm percentual: 15%`);
} 
else if (salarioAntigo>=400.01 && salarioAntigo<=800) {
     reajuste = (salarioAntigo*12)/100;
     salarioNovo = salarioAntigo+reajuste;    
     console.log(`Novo salário: R$${salarioNovo}\nReajuste ganho: R$${reajuste}\nEm percentual: 12%`);
}
else if (salarioAntigo>=800.01 && salarioAntigo<=1200) {
    reajuste = ((salarioAntigo*10)/100);
    salarioNovo = salarioAntigo+reajuste;
    console.log(`Novo salário: R$${salarioNovo}\nReajuste ganho: R$${reajuste}\nEm percentual: 10%`);
}
else if (salarioAntigo>=1200.01 && salarioAntigo<=2000) {
    reajuste = ((salarioAntigo*7)/100);
    salarioNovo = salarioAntigo+reajuste;
    console.log(`Novo salário: R$${salarioNovo}\nReajuste ganho: R$${reajuste}\nEm percentual: 7%`);
}
else if (salarioAntigo>2000) {
    reajuste = ((salarioAntigo*4)/100);
    salarioNovo = salarioAntigo+reajuste;
    console.log(`Novo salário: R$${salarioNovo}\nReajuste ganho: R$${reajuste}\nEm percentual: 4%`);
}
else {
    console.log("O salário informado não é considerado válido!");
}

// ----------------------------------------------------------------------------------------------------- //
/* 2 - Mpstrar em qual dos intervalos está o valor de entrada [0,25]; [25,50]; [50,75]; [75,100]; */
// ----------------------------------------------------------------------------------------------------- //
const numero = 52;

if (numero>0 && numero<=25) {
    console.log(`Valor de entrada: ${numero}    Intervalo: [0,25].`);
}
else if (numero>25 && numero<=50) {
    console.log(`Valor de entrada: ${numero}    Intervalo: [25,50].`);
} 
else if (numero>50 && numero<=75) {
    console.log(`Valor de entrada: ${numero}    Intervalo: [50,75].`);
}
else if (numero>75 && numero<=100) {
    console.log(`Valor de entrada: ${numero}    Intervalo: [75,100].`);
}
else 
{
    console.log(`Fora do intervalo`);
}

// ----------------------------------------------------------------------------------------------------- //
/* 3 - Teste com arrays = lista */
// ----------------------------------------------------------------------------------------------------- //
const familia = ['pai', 'mãe', 'filho'];
console.log(familia);
console.log(familia[0]);
const frutas = ['pera', 'banana', 'maça']


// ----------------------------------------------------------------------------------------------------- //
/* 4 - Teste de introdução ao FOR */
// ----------------------------------------------------------------------------------------------------- //
// for (let i=0; i<5; i++) {
    console.log('eu estou aprendendo');
}

// ----------------------------------------------------------------------------------------------------- //
/* 5 - Printar se os numeros até chegar no valor de entrada são par ou impar. */
// ----------------------------------------------------------------------------------------------------- //
const numero = 10;
let i = 0;

for (i=1; i<=numero; i++) {
    if (i%2 == 0) {
    console.log(`O número ${i} é par`);  
    }
    else if (i%2 != 0) {
        console.log(`O número ${i} é ímpar`);
    }
}

// ----------------------------------------------------------------------------------------------------- //
/* 6 - Somar todos os multiplos de 3 e de 5 que existem nesse valor. */
// // ----------------------------------------------------------------------------------------------------- //
const numero = 20;
let mult3 = 0;
let mult5 = 0;
let soma = 0;
let i = 0;

for (i=1; i<=numero; i++) {
    if (i%3==0){
        mult3 = mult3 + i; // mult3 +=i; dessa forma também serve pra mesma coisa
    }
    if (i%5==0) {
        mult5 = mult5 + i;
    }
}
soma = mult3+mult5;
console.log(`- Soma dos múltiplos de 3 é: ${mult3}\n- Soma dos múltiplos de 5 é: ${mult5}\n- Soma de ambos é: ${soma}`);
