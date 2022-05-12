const array = [90,80,80]
console.log(mediaaluno(array))

function mediaaluno(entrada){
     let media = 0;
     for(let indice of entrada){
        media += indice
        let medianota = media/(entrada.length)
        if(medianota >= 0 && medianota <= 59){
            return 'Reprovado'
        }else if(medianota >= 60 && medianota <= 79){
            return 'Reprovado 2'
        }else{
            return 'pica'
        }
     }
     
}
 