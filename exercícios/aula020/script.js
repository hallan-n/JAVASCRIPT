function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        alert('Por favor digite um número válido')
    }else{
        res.innerHTML = 'Contando: '
        var ini = Number(inicio.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)

        for(cont = ini; cont <= fi; cont+= pas){
            res.innerHTML += `${cont} `
        }
    }
}