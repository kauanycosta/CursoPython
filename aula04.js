// ----------------------------------------------------------------------------------------------------- //
/* 1 - Criar um algoritmo que mostre apenas numero primos até o valor de entrada. */
// ----------------------------------------------------------------------------------------------------- //
const numero = 20;
let i = 0, j = 0;
let cont = 0;

for (i=1;i<=numero;i++) {
    for (j=2;j<=numero;j++) {
        if (i%j==0) {
            cont++;
            if (cont==1 && i==j) {
                console.log(`Esse número é primo: ${i}`);
            }
        }
    }
    cont = 0;
}

//vetores
let vetor = [25,35,2,8,9];
console.table(vetor);
console.log(vetor.length);

// ----------------------------------------------------------------------------------------------------- //
/* 2 - A partir do vetor [3,5,6,2,4,8,9,14], printar a soma dos pares e a soma dos impares */
// ----------------------------------------------------------------------------------------------------- //
let vetor = [3,5,6,2,4,8,9,14];
let i = 0;
let j = 0;
let par = 0;
let impar = 0;

for (j=0;j<(vetor.length);j++) {
    if(vetor[i]%2==0) {
        par=par+vetor[i];
    }
    else {
        impar=impar+vetor[i];
    }
    i++;
}
console.log(`A soma total dos pares é: ${par}`);
console.log(`A soma total dos ímpares é: ${impar}`);
