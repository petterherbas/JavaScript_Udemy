/* 08) Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
registro de todos as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 110"

const recorde = function(stringPontuacoes) {
    let pontuacao = stringPontuacoes.split(', ').map(Number)
    let qntdRecorde = 0
    let maiorRecorde = pontuacao[0]
    let menorPontuacao = pontuacao[0]
    let indice = 0
    
    for(let i = 0; i < pontuacao.length; i++) {
        if(pontuacao[i] > maiorRecorde) {
            qntdRecorde++
            maiorRecorde = pontuacao[i]
        } else if(pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
            indice = pontuacao.indexOf(menorPontuacao)
        }
    }

    return [qntdRecorde, maiorRecorde, menorPontuacao, indice]
}

console.log(recorde(stringPontuacoes))