/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

const bhaskara = function(ax2, bx, c) {
    let raizes = []
    let delta = bx**2 - 4 * ax2 * c
    if(delta >= 0) {
        let xmais = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let xmenos = (-bx - Math.sqrt(delta)) / (2 * ax2)
        raizes.push(xmais, xmenos)

        return raizes
    } else {
        let frase = 'Delta é negativo.'

        return frase
    }
}

console.log(bhaskara(1, 12, -13))
console.log(bhaskara(2, -16, -18))
console.log(bhaskara(1, -1, 1))