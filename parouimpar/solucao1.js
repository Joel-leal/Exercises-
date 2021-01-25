const jogador1 = [1,2,3,4,5]
const jogador2 = [5,4,1,7,9]
//% resto da divisão 6%2=0 7%2=1
const resultado = []
for(let i = 0; i < jogador1.length; i++) {
    const soma=jogador1[i]+jogador2[i]
    
    if(soma%2 === 0){
        resultado.push('par')
    } 
    else {
        resutaldo.push('impar')
    }
}   
 
console.log(resultado)
