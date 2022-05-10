function divis(controle1){
    if(typeof controle1 !== 'number'){
        return 'Não é um número'
    }
    if(controle1 % 5 == 0 && controle1 % 3 == 0){
        return 'FizzBuzz'
    }else if(controle1 % 5 == 0){
        return 'Buzz'
    }else if(controle1 % 3 == 0){
        return 'Fizz'
    }else if(controle1 % 3 >= 1){
        return controle1
    }else{
        return 'Não é um número'
    }
}
let controle = divis(true)
console.log(controle)