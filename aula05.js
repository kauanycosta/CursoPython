// ----------------------------------------------------------------------------------------------------- //
/* 1 - A partir do vetor [3,5,6,2,4,8,9,14], printar o maior e o menor, junto com as suas posições. */
// ----------------------------------------------------------------------------------------------------- //
const vetor = [3,5,6,2,4,8,9,14];
let i = 0, posicaoMen = 0, posicaoMai = 0;
let menor = 100;
let maior = 0;

for (let j=0;j<(vetor.length);j++) {
    if (vetor[i]>maior) {
        maior=vetor[i];
        posicaoMai = i;
    }
    i++;
}
i = 0;
for (let j=0;j<(vetor.length);j++) {
    if (vetor[i]<menor){
        menor=vetor[i];
        posicaoMen = i;
    }
    i++;
}
console.log(`O maior valor é: ${maior} e está na posição ${posicaoMai}`);
console.log(`O menor valor é: ${menor} e está na posição ${posicaoMen}`);
