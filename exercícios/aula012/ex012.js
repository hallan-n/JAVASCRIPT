var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('então morra')
        break
}

var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
var agora = new Date()
var diaSem = agora.getDay()
if(diaSem == 0){
    console.log('Domingo')
}else if(diaSem == 1){
    console.log('Segunda')
}else if(diaSem == 2){
    console.log('Terça')
}else if(diaSem == 3){
    console.log('Quarta')
}else if(diaSem == 4){
    console.log('Quinta')
}else if(diaSem == 5){
    console.log('sexta')
}else{
    console.log('Sábado')
}

