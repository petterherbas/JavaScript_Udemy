/* 1) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 multiplicação e divisão desses valores. */

const operacoes = function(a, b) {
    let soma = a + b
    let sub = a - b
    let mult = a * b
    let div = a / b

    console.log(`A soma de ${a} + ${b} = ${soma}.`)
    console.log(`A subtração de ${a} - ${b} = ${sub}.`)
    console.log(`A multiplicação de ${a} x ${b} = ${mult}.`)
    console.log(`A divisão de ${a} / ${b} = ${div}.`)
}

operacoes(5, 7)