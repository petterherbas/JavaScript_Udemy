/* 19) O cardápio de uma lanchonete é o seguinte:

Código Descrição do Produto Preço
100    Cachorro Quente      R$ 3,00
200    Hambúrguer Simples   R$ 4,00
300    Cheeseburguer        R$ 5,50
400    Bauru                R$ 7,50
500    Refrigerante         R$ 3,50
600    Suco                 R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */

let lanchonete = function(codigo, quantidade) {
    switch(codigo) {
        case 100:
            console.log(`${quantidade} Cachorro Quente, total R$ ${(quantidade * 3).toFixed(2)}`)
            break
        case 200:
            console.log(`${quantidade} Hambúrguer Simples, total R$ ${(quantidade * 4).toFixed(2)}`)
            break
        case 300:
            console.log(`${quantidade} Cheeseburguer, total R$ ${(quantidade * 5.5).toFixed(2)}`)
            break
        case 400:
            console.log(`${quantidade} Bauru, total R$ ${(quantidade * 7.5).toFixed(2)}`)
            break
        case 500:
            console.log(`${quantidade} Refrigerante, total R$ ${(quantidade * 3.5).toFixed(2)}`)
            break
        case 600:
            console.log(`${quantidade} Suco, total R$ ${(quantidade * 2).toFixed(2)}`)
            break
    }
}

lanchonete(100, 2)
lanchonete(200, 1)
lanchonete(300, 3)
lanchonete(400, 5)
lanchonete(500, 4)
lanchonete(600, 7)
lanchonete(000, 10)