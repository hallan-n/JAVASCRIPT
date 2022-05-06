function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById('txtano')
    var res = document.getElementById('res')
    console.log(forano)
    if(forano.value.length == 0 || forano.value > ano){
        window.alert('Por favor, digite um número válido')
    }else{
        window.alert('Tudo bem')
    }
}