// ----------------------------------------------------------------------------------------------------- // //
/* 1 - Realizar o cálculo de IMC: */
// ----------------------------------------------------------------------------------------------------- // //

function main() {
    const peso = 75;
    const altura = 1.60;
    const imc = calculoIMC(peso, altura);
    console.log("O IMC é: "+imc.toFixed(1));

    function calculoIMC(peso, altura){
        const imc = (peso/(altura*altura));
        return imc;
    }
}
main()


// ----------------------------------------------------------------------------------------------------- // //
/* 2 - Cálculo do volume e área de um cubo: */
// ----------------------------------------------------------------------------------------------------- // //

const arestaCubo = 5;
const volumeCubo = Math.pow(arestaCubo, 3);
const areaCubo = (6 * Math.pow(arestaCubo, 2));

console.log("O volume do cubo de aresta "+arestaCubo+" é: "+volumeCubo);
console.log("A área do cubo de aresta "+arestaCubo+" é: "+areaCubo);
console.log(`A área do cubo de aresta ${arestaCubo} é: ${areaCubo}`);
