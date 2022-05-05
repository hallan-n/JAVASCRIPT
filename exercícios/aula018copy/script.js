function mudarsol(){
    var body = window.document.getElementById('body')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dia = new Date()
    var hora = dia.getHours()
    if(hora > 0 && hora < 12){
        msg.innerHTML = `Bom dia! Agora são ${hora}h`
        img.src = 'manha.png'
        body.style.background = '#ffe952'
        
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde! agora são ${hora}h`
        img.src = 'tarde.png'
        body.style.background = '#f5a671'
    }else{
        msg.innerHTML = `Boa noite! agora são ${hora}h`
        img.src = 'noite.png'
        body.style.background = '#7e7e7e'
    }
}