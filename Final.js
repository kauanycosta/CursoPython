// ----------------------------------------------------------------------------------------------------- // //
/* O cárdapio de uma lanchonete é o seguinte:
    ESPECIFICAÇÃO       CÓDIGO      PREÇO
    Cachorro Quente     100         R$1,20
    Bauru Simples       101         R$1,30
    Bauru com ovo       102         R$1,50
    Hambúrguer          103         R$1,20
    Cheeseburguer       104         R$1,30
    Refrigerante        105         R$1,00

    Faça um programa que leia o código dos itens pedidos e as quantidades desejadas.
    Calcule e mostre o valor a ser pago por item (preço *quantidade) e o total geral do pedido.
    O pedido é encerrado quando o cliente digitar o código 999 
    *controlar para que o cliente só possa digitar os códigos do menu.
*/

// ----------------------------------------------------------------------------------------------------- // //
function main() {
    //adicionando itens ao menu
    const especificacao = ['Cachorro quente', 'Bauru Simples  ', 'Bauru com ovo  ',
        'Hambúrguer     ', 'Cheeseburguer  ', 'Refrigerante   '];
    const codigo = [100, 101, 102, 103, 104, 105];
    const preco = [1.20, 1.30, 1.50, 1.20, 1.30, 1.00];

    //mostrando o menu na tela
    console.log(`\nESPECIFICAÇÃO       CÓDIGO     PREÇO`);
    for (count = 0; count < especificacao.length; count++) {
        console.log(`${especificacao[count]}      ${codigo[count]}      ${preco[count].toFixed(2)}`);
    }
    console.log(`\nIniciando a compra!\n`);

    //declarando as variáveis
    let pedido = []; //vetor que recebo os pedidos
    let quantidade = [] //vetor para receber as quantidades de cada item
    let valorItem = []; //vetor para receber valor por por item
    let j = 0; //pra percorrer o vetor pedidos, vetor quantidade, vetor valorItem
    let i = 0; //pra percorrer o código
    let k = 0; //pra percorrer a impressão do pedido total
    let parametroCodigo = [] //pra armazenar a posicao do codigo
    let l = 0 //pra armazenar a posicao do valor do item
    let parametro = 0; //
    let resposta = 0; //pra informar se o pedido está entre os códigos
    let valorTotalCompra = 0;

    //iniciando a coleta de informações
    do {
        j++;
        let prompt = require("prompt-sync")();
        pedido[j] = Number(prompt(`Código do item: `));

        //indo logo pra validação while se for 999
        if (pedido[j] == 999) {
            break;
        }
        //se ele informou um número entra aqui
        if (!!+pedido[j] == true) {
            //se ele informou um positivo entra aqui
            if (pedido[j] > 0) {
                //testando se o código do pedido existe no cardápio
                for (i = 0; i < codigo.length; i++) {
                    if (pedido[j] != codigo[i]) {
                        resposta = 1;
                    } 
                    else if (pedido[j] == codigo[i]) {
                        resposta = 2;
                        parametroCodigo[k] = i;
                        //recebendo a posição pra pegar as outras informações do produto
                        parametro = i;
                        k++
                    }
                    if (resposta == 2) {
                        break;
                    }
                }
                if (resposta == 1) {
                    pedido[j] = 0;
                }

                //informando se o código existe ou não
                //se o código existe entra aqui
                if (resposta == 2) {
                    //recebendo a quantidade dos itens
                    quantidade[j] = Number(prompt(`Quantidade: `));
                    //testando se a quantidade é um número
                    if (!!+quantidade[j] == true) {
                        //testando se a quantidade é positiva
                        if (quantidade[j] > 0) {
                            //calculando o valor total do item
                            valorItem[j] = preco[parametro] * quantidade[j];
                            console.log(`Valor total à ser pago para este item: R$${valorItem[j].toFixed(2)}\n`);

                            //somando o valor total da compra
                            valorTotalCompra = valorTotalCompra + valorItem[j];
                        } 
                        //se for negativo entra aqui
                        else {
                            console.log(`\n> > > > ERRO! Informe uma quantidade positiva válida. < < < <\n`);
                            quantidade[j] = 0;
                            pedido[j] = 0;
                        }
                    }
                    else {
                        console.log(`\n> > > > ERRO! Informe uma quantidade válida. < < < <\n`);
                        quantidade[j] = 0;
                        pedido[j] = 0;
                    }
                }
                //se o código não existe entra aqui
                else {
                    console.log(`\n> > > > ERRO! Esse código não existe. < < < <\n`);
                    quantidade[j] = 0;
                    pedido[j] = 0;
                }
            }
            //se ele informou negativo entra aqui
            else {
                console.log(`\n> > > > ERRO! Você precisa informar um número positivo. < < < <\n`);
                pedido[j] = 0;
                quantidade[j] = 0;
            }
        }
        //se o usuário informou uma string entra aqui
        else {
            console.log(`\n> > > >ERRO! Você precisa informar um número. < < < <\n`);
            pedido[j] = 0;
            quantidade[j] = 0;
        }
        i = 0;
    } while (pedido[j] != 999);
    console.log(`\nVocê solicitou: `);

    let o = 0;
    for (k = 1; k < pedido.length - 1; k++) {
        l = parametroCodigo[o];
        if (quantidade[k] != 0 && codigo[l] != 0 && valorItem[k] != 0) {
            console.log(`- ${quantidade[k]} itens do código ${codigo[l]}\n  -   Totalizando: R$${valorItem[k].toFixed(2)}`);
            o++;
        } else {
            console.log(`Item inválido!`);
        }
        l=0;
    }

    console.log(`\nValor total da sua compra: R$${valorTotalCompra.toFixed(2)}`);
} main()
