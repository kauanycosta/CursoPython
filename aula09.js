// -----------------------------------------------------------------------------------------------------
/* O sr Manoel Joaquim possui uma grande loja de artigos de R$1,99, com cerca de 10 caixas.
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu uma tabela que 
contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma,
 a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela
 de preços.
 Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os 
 preços de 1 até 50 produtos, conforme o exemplo abaixo:
 Lojas Quase Dois Reais - Tabela de preços
 1 - R$1,99
 2 - R$3,98
*/
// -----------------------------------------------------------------------------------------------------

let valorunico = 1.99;
let i = 0;
console.log(`Loja Quase Dois Reais - Tabela de Preços:`);
for (i=1;i<=50;i++){
    let valorsomado = valorunico*i;
    console.log(`${i} - R$${valorsomado}`);
}

// -----------------------------------------------------------------------------------------------------
/*
Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número
desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo 
operador para indicar o final de compra, o programa deve então mostrar o total da compra e perguntar o
valor em dinheiro que o cliente forneceu, para calcular e mostrar o valor do troco.
Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a própria compra.
A saída deve ser conforme o exemplo abaixo:
Lojas Tabajara:
Produto 1: R$2,20
Produto 2: 5,00
Produto 3: R$0
Total: R$ 9,00
Dinheiro: R$20,00
Troco: R$11,00
*/
// -----------------------------------------------------------------------------------------------------

let resposta = 0;;

console.log(`\nLojas Tabajara!`);
do{
    let total = 0, dinheiro = 0, troco = 0;
    let i = 0, j = 0;
    let valorProduto = [];
    while (valorProduto[i] != 0){
        j = j+1;
        let prompt = require("prompt-sync")();
        valorProduto [i] = prompt(`     PRODUTO ${j}: R$`);
        total = total+(parseInt(valorProduto[i]));
    }
    console.log(`       TOTAL: R$${total}`);
    prompt = require("prompt-sync")();
    dinheiro = prompt(`     DINHEIRO: R$`);
    if (dinheiro<total) {
        do {
            console.log(`>>>>ERRO! Informe um pagamento maior do que o total.<<<<`);
            prompt = require("prompt-sync")();
             dinheiro = prompt(`     DINHEIRO: R$`);
        } while (dinheiro<total)
    }
    troco = (parseInt(dinheiro))-total;
    console.log(`       TROCO: R$${troco}`);
    console.log(`\nCompra finalizada com sucesso!`);
    prompt = require("prompt-sync")();
    resposta = prompt(`Deseja cadastrar mais compras? (1 - SIM; 0 - NÃO): `);
    if (resposta==0){
        console.log(`PROGRAMA ENCERRADO`);
    }
} while (resposta!=0)

// -----------------------------------------------------------------------------------------------------
/* O departamento estadual de meteorologia lhe contratou pra desenvolver um programa que leia as temperaturas 
de um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperatura informada, bem 
como a média das temperaturas.
*/
// -----------------------------------------------------------------------------------------------------

let i = 0, j=0;
let temperaturas = [];
let maior = 0;
let menor = 150;
let soma = 0;
let count = 0;

let prompt = require("prompt-sync")();
let quantidade = prompt(`\nQuantas temperaturas você deseja informar? `);
for(j=1;j<=quantidade;j++) {
    let prompt = require("prompt-sync")();
    temperaturas [i] = prompt(`Informe a temperatura: `);
    soma = soma + (parseInt(temperaturas[i]));
    if(temperaturas[i] < menor){
        menor = temperaturas[i];
    } else if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }
    count++
}
let media = ((parseInt(soma))/count);
console.log(`\nA maior temperatura informada foi: ${maior}
A menor temperatura informada foi: ${menor}
A média das temperaturas foi: ${media}\n`);
