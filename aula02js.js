// ----------------------------------------------------------------------------------------------------- // //
/* 1 - Valor A e valor B multiplicam e geram o valor E, valor C e valor D multiplicam e geram produto F. 
Subtraia o produto E e F: */
// ----------------------------------------------------------------------------------------------------- // //
const valorA = 5;
const valorB = 6;
const valorC = 7;
const valorD = 8;
const diferenca = ((valorA*valorB) - (valorC*valorD));
console.log("A diferença é:",diferenca);

// ----------------------------------------------------------------------------------------------------- // //
/*2 - Calcular o consumo de gasolina total: */
// ----------------------------------------------------------------------------------------------------- // //
const velocidadeMedia = 85;
const tempo = 10;
const consumoMedia = 12;
const deslocamento = velocidadeMedia*tempo;
const consumo = deslocamento/12;
console.log(`A quantidade de litros gastos na viagem foi de: ${consumo.toFixed(2)}L`);

// como calcular potência
const a = 3;
console.log(a**3);

// como converter numeros para inteiro
a = 2.35;
console.log(parseInt(a));

// como converter numeros para ter casas decimais
a = 2.35;
console.log(parseFloat(a));

/* >> OPERADORES LÓGICOS <<
    - > maior   - < menor   - == igual
    - === igual literal     - != difernte ou !== diferente literal
    - || ou     - && and
*/

// ----------------------------------------------------------------------------------------------------- // //
/*3 - Testes com IF, ELSE e ELSE IF: */
// ----------------------------------------------------------------------------------------------------- // //
const idade = 68;

if(idade>=18 && idade<70){
    console.log(`Você tem permissão.`);
} else if (idade == 17){
    console.log(`Falta apenas um ano para ter acesso.`);
} else {
    console.log(`Acesso negado`);
}
console.log(`terminou a execução`);

// ----------------------------------------------------------------------------------------------------- // //
/*4 - Testes com SWITCH CASE: */
// ----------------------------------------------------------------------------------------------------- // //
const mes = 5;
switch (mes) {

    case 1:
        console.log(`Janeiro`);
        break;
    case 2:
        console.log(`Fevereiro`);
        break;
    case 3:
        console.log(`Março`);
        break;
    default:
        console.log(`Não é um mês válido`);
        break;
}

// ----------------------------------------------------------------------------------------------------- // //
/*5 - Exercício diferenciar par e impar: */
// ----------------------------------------------------------------------------------------------------- // //
const numero = 1;

if (numero%2 == 0){
    console.log(`O número ${numero} é par.`);
}
else if (numero%2 != 0) {
    console.log(`O número ${numero} é ímpar.`);
}

// ----------------------------------------------------------------------------------------------------- // //
/*6 - Exercício para calcular IMC: */
// ----------------------------------------------------------------------------------------------------- // //
const peso = 40;
const altura = 1.60;

const imc = (peso/(altura*altura));

if(imc<18.5){
    console.log(`Seu IMC indica magreza.`);
} 
else if (imc>=18.5 && imc<=24.9){
    console.log(`Seu IMC é normal.`);
} 
else if (imc>=25 && imc<=29.9){
    console.log(`Seu IMC indica sobrepeso`);
}
else if (imc>=30 && imc<=34.9){
    console.log(`Seu IMC indica obesidade grau I.`);
}
else if (imc>=35 && imc<=39.9){
    console.log(`Seu IMC indica obesidade grau II.`);
} else if (imc>=40){
    console.log(`Seu IMC indica obesidade grau III.`);
}
