function tabuada(){
    let num = document.getElementById('numero')
    let selecao = document.getElementById('selecao')
    if(num.value.lemght == 0){
        window.alert('Por favor digite um número')
    }else{
        let numpase = Number(numero.value)
        let c = 1
        selecao.innerHTML=' '
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${numpase} x ${c} = ${numpase * c}`
            selecao.appendChild(item)
            c++
        }
    }
}