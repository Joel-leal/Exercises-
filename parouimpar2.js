//Dado duas listas de números inteiros, cada uma contendo a sequência de escolhas de um jogador em uma partida de par ou ímpar, indicar o vencedor da partida.
//O primeiro jogador sempre escolhe par e, consequentemente, o segundo jogador escolhe ímpar.
//Imprimir na tela:

//PRIMEIRO, caso o primeiro jogador tenha vencido;
//SEGUNDO, caso o segundo jogador tenha vencido;
//EMPATE, caso a partida tenha terminado empatada.

const lista1 = [2,2,5,3,2,4,5,4]
const lista2 = [4,2,1,5,9,3,2,1]
const valor = []
for (let i = 0; i < lista1.length; i++){
    const x = lista1[i] + lista2[i]
    if(x%2 === 0){
        var y = 'par'
    } 
    else {
        var y = 'impar'
    }
    valor.push(y)
} 
const jogador1 = []
const jogador2 = []
for (let i = 0; i < valor.length; i++){
    if(valor[i] === 'par'){
        jogador1.push(1)  
    } 
    else {
       jogador2.push(0)
    }
} 
if(jogador1.length > jogador2.length){
    console.log('vencedor: jogador 1')
}
else if(jogador2.length > jogador1.length){
    console.log('vencedor: Jogador2')
}
else{
    console.log('vencedor: Não houve vencedor, o jogo terminou empatado.')
}
