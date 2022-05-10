//Receber uma quantidade de vcalores para avaliar
//Função exibe se cada vcalor é par ou ímpar

function parouimpar(numero){
    for(let i = 0; numero >= i; i++){
        if(numero % 2 ===0){
            return `o número ${numero} é par`
        }else{
            return `o número ${numero} é impar`
        }
    }
}
console.log(parouimpar(0))