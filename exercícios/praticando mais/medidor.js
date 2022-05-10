//velocidade max de até 70km
// a cada 5km a cima do limite você ganha 1 ponto na carteira
// caso os pontos sejam maior do que 12 a carteira é suspendida

function verificadorVelocidade(velocidade){
    const velocidade1 = Math.floor((velocidade - 70) / 5)
    const velmax = 70
    const pontmax = 12
    if(velocidade <= velmax){
        return 'Dirija bem'
    }else if(velocidade1 >= pontmax){
        return 'Perdeu a carteira'
    }else{
        return `Velocidade muito alta você recebeu ${velocidade1} pontos na carteira`
    }
}
console.log(verificadorVelocidade(81))