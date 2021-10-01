/* 12) Faça um algoritmo que calcule o fatorial de um número.
 */

let calculaFat = num => {
    let fatorial = 1

    for(i = 1; i <= num; i++) {
        fatorial = fatorial * i
    }

    return fatorial
}

console.log(calculaFat(1))
console.log(calculaFat(2))
console.log(calculaFat(3))
console.log(calculaFat(4))
console.log(calculaFat(0))