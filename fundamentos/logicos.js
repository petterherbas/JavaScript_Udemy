function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operar unário

    let resumo = ''

    if (trabalho1 && trabalho2) {
        resumo = "Comprei uma TV de 50 polegadas e um Açaí."
    } else if (trabalho1 || trabalho2) {
        resumo = "Comprei uma TV de 32 polegadas e um Açaí."
    } else {
        resumo = "Não comprei nada, tô pobre."
    }

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel, resumo }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))