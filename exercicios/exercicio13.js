/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

let diaSemana = dia => {
    switch(dia) {
        case 1:
            console.log('Domingo, fim de semana.')
            break 
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia da semana.')
            break
        case 7:
            console.log('Sabádo, fim de semana.')
            break
        default:
            console.log('Dia invalido!')
    }
}

diaSemana(0)
diaSemana(5)
diaSemana(7)
diaSemana(1)