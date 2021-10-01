/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
 */

let verifica = x => {
    if(x % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verifica(9))
console.log(verifica(46))
console.log(verifica(75))