/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

let calculadora = function(n1, o, n2) {
    switch(o) {
        case '+':
            console.log(`${n1} ${o} ${n2} = ${n1 + n2}`)
            break
        case '-':
            console.log(`${n1} ${o} ${n2} = ${n1 - n2}`)
            break
        case '*':
            console.log(`${n1} ${o} ${n2} = ${n1 * n2}`)
            break
        case '/':
            console.log(`${n1} ${o} ${n2} = ${n1 / n2}`)
            break
        default:
            console.log('Operação inválida!')
    }
}

calculadora(2, '+', 2)
calculadora(8, '-', 3)
calculadora(5, '*', 5)
calculadora(12, '/', 6)
calculadora(15, '%', 8)