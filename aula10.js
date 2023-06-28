// -----------------------------------------------------------------------------------------------------
/* 1 - Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No final da série de 
saltos de cada atleta, o melhor e o pior resultados são eliminados. O seu resultado fica sendo a média dos 
três valores restantes. Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo 
atleta em seus saltos e depois informea média dos saltos conforme a descrição. 
 - Faça uso de uma lista para armazenar os saltos.
 - Os saltos são informados na ordem de execução, portanto não são ordenados
 - A saída do programa deve ser cofnroem o exemplo abaixo:

Atleta: Rodrigo Fulano
Primeiro salto: 6,3m
Segundo salto: 6,1m
Terceiro salto: 6,2m
Quarto salto: 5,4m
Quinto salto: 5,3m

Melhor salto:6,3m
Pior salto:5,3m
Média dos demais saltos: 3,9m

Resultado final: Rodrigo Fulano
*/
// -----------------------------------------------------------------------------------------------------
let saltos = Array;
let nome = [];
let melhorsalto = 0;
let piorsalto = 100;
let vencedor = "";
let i = 0, j = 0, soma = 0, media = 0, mediaV = 0;

let prompt = require("prompt-sync")();
let count = Number(prompt(`Quantos atletas participaram da competição? `))
for(j=1;j<=count;j++){
    nome [i] = prompt(`Nome do atleta: `);
    for(let countS=1;countS<=5;countS++){
        saltos [countS]= Number(prompt(`Distância salto ${countS}: `));
        if(saltos[countS]>melhorsalto){
            melhorsalto = saltos[countS];
        } 
        else if(saltos[countS]<piorsalto){
            piorsalto = saltos[countS];
        }
        soma = soma + saltos[countS];
    }
    soma = soma - melhorsalto;
    soma = soma - piorsalto;
    media = soma/3;

    console.log(`\nMelhor salto: ${melhorsalto}`);
    console.log(`Pior salto: ${piorsalto}`);
    console.log(`Média dos demais saltos: ${media.toFixed(2)}\n`);
    
    if(media>mediaV){
        mediaV = media;
        vencedor = nome[i];
    }
    soma = 0;
    media = 0;
}
console.log(`Resultado final: ${vencedor}`);
