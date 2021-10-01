/* 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

Plano Aumento
A     10%
B     15%
C     20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

let planoTrabalho = function(plano, salario) {
    switch(plano) {
        case 'a':
            console.log(`Aumento de 10% = ${salario * 0.1}, salario novo ${salario + (salario * 0.1)}`)
            break
        case 'b':
            console.log(`Aumento de 15% = ${salario * 0.15}, salario novo ${salario + (salario * 0.15)}`)
            break
        case 'c':
            console.log(`Aumento de 20% = ${salario * 0.2}, salario novo ${salario + (salario * 0.2)}`)
            break
        default:
            console.log('Plano inserido inválido!')
    }
}

planoTrabalho('a', 1600)
planoTrabalho('b', 1600)
planoTrabalho('c', 1600)
planoTrabalho('d', 1600)