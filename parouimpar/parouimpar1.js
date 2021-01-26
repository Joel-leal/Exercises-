const lista1 = [2,3,5,2,2,4,6,4]
const lista2 = [4,2,1,5,9,3,2,1]
let jogador1 = 0
let jogador2 = 0
for (let i = 0; i < lista1.length; i++){
    const x = lista1[i] + lista2[i]
    if(x%2 === 0){
        jogador1 += 1
    } 
    else {
        jogador2 += 1
    }
} 

if(jogador1 > jogador2){
    console.log('vencedor: jogador 1')
} else{
    console.log('vencedor: Jogador2')
}