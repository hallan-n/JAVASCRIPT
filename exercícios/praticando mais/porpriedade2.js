const filme = {
    nome: 'hállan',
    idade: 20,
    sexo: 'M'
}
retornastring(filme)
function retornastring (entrada){
    for(objeto in entrada){
        if(typeof entrada[objeto] === 'string'){
            console.log(objeto, entrada[objeto])
        }
    }
}