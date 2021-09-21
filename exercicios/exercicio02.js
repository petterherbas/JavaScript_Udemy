/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo) */

const triangulo = function(a, b, c) {
    if(a == b && a == c) {
        console.log('Os valores forman um triângulo Equilátero.')
    } else if(a == b || a == c || c == b) {
        console.log('Os valores forman um triângulo Isósceles.')
    } else {
        console.log('Os valores forman um triângulo Escaleno.')
    }
}

triangulo(1, 2, 3)
triangulo(1, 1, 2)
triangulo(1, 1, 1)
triangulo(67, 56, 56)