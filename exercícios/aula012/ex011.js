var idade = 90
/*if(idade < 16){
    console.log('Não vota')
}else{
    if(idade == 16 || idade == 17){
        console.log('Voto opcional')
    }else{
        console.log('Vota')
    }
}
console.log(`Nocê tem ${idade} anos de idade`)
if(idade < 16){
    console.log('Não vota')
}else if(idade < 18 || idade >= 66){
    console.log('Voto opcional')
}else{
    console.log('vota')
}*/

var agora = new Date()
var hora = agora.getHours()
if(hora < 12){
    console.log('Bom dia')
}else if(hora <= 18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}