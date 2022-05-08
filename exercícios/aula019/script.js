function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var forano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var aparencia = document.getElementById('imagem')
    console.log(forano)
    if(forano.value.length == 0 || Number(forano.value) > ano){
        window.alert('Por favor, digite um número válido')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(forano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Você é ${genero} com Idade de ${idade} anos`
    }
    
    if(idade >= 0 && idade <= 13){
        aparencia.src = 'criança.png'
    }else if(idade >=14 && idade <=18){
        aparencia.src = 'jovem.png'
    }else if(idade >= 19 && idade <= 59){
        aparencia.src = 'adulto.png'
    }else if(idade >= 60 && idade <=80 ){
        aparencia.src = 'velho.png'
    }else{
        aparencia.src = 'tumulo.png'
    }
}