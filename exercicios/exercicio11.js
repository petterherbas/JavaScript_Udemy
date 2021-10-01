/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

let calculaAno = ano => {
    if(ano % 4 == 0) {
        if(ano % 400 == 0) {
            let msg = true + ' - O ano é Bissexto.'

            return msg
        } else if(ano % 100 == 0) {
            let msg = false + ' - O ano não é Bissexto.'

            return msg
        } else {
            let msg = true + ' - O ano é Bissexto.'

            return msg
        }
    } else {
        let msg = false + ' - O ano não é Bissexto.'

        return msg
    }
}

console.log(calculaAno(1988))
console.log(calculaAno(1998))
console.log(calculaAno(2044))
console.log(calculaAno(2221))
console.log(calculaAno(1900))