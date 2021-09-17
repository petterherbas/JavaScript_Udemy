// Gerando um número aleatório entre 0 (inclusivo) e 1 (exclusivo)

function getRandom() {
  return Math.random()
}

const r = getRandom()
console.log(r)

// Gerando um número aleatório ente dois valores
// O valor retornado será maior ou igual a min, e menor que max.

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const r1 = getRandomArbitrary(95, 125)
console.log(r1)

// Gerando um número inteiro aleatório entre dois valores
// O valor não poderá ser menor que min (ou do próximo inteiro maior que min, caso min não seja inteiro), e será menor (mas não igual) a max.

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random () * (max - min)) + min
}

const r2 = getRandomInt(22.5, 32.78)
console.log(r2)