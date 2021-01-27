//Dado duas listas de números inteiros, cada uma contendo a sequência de escolhas de um jogador em uma partida de par ou ímpar, indicar o vencedor da partida.
//O primeiro jogador sempre escolhe par e, consequentemente, o segundo jogador escolhe ímpar.
//Imprimir na tela:

//PRIMEIRO, caso o primeiro jogador tenha vencido;
//SEGUNDO, caso o segundo jogador tenha vencido;
//EMPATE, caso a partida tenha terminado empatada.

//
const lista1 = [2,2,5,3,2,4,5,4]
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
} else if(jogador2 > jogador1) {
    console.log('vencedor: Jogador2')
}
 else{
    console.log('jogo terminou empatado')
}