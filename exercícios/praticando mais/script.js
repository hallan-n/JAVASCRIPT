//Escreva uma função que usa 2 números e retorena o maior entre eles

function retornarMaior(number1,number2){
    if(number1 > number2){
        return number1;
    }else{
        return number2;
    }
}
console.log(retornarMaior(10,10))