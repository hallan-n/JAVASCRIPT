
numprimos(30)
function numprimos(entrada){
    for(let controle = 2; controle <= entrada; controle ++){
        let verificador = true;
        for(let controle2= 2; controle2 < controle; controle2++){
            
            if(controle % controle2 === 0){
                verificador = false;
                break;
            }
        }
    } if(verificador){console.log(controle)}
}