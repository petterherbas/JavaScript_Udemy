let dobro = function () {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'olá' // possui um param
console.log(ola())

soma = (a, b) => a + b
console.log(soma(10, 8))

sub = a => a - 5
console.log(sub(20))

texto = () => 'Imprimindo um texto qualquer.'
console.log(texto())