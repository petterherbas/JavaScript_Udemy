/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = function(capital, taxa, aplicacao) {
    taxa = taxa / 100
    let juros = capital * taxa * aplicacao
    let montante = capital + juros

    return montante
}

const jurosCompostos = function(capital, taxa, aplicacao) {
    taxa = taxa / 100
    let montante = capital * (1 + taxa) ** aplicacao

    return montante
}

console.log(jurosSimples(1200, 2, 14))
console.log(jurosCompostos(620, 1.5, 24).toFixed(2))