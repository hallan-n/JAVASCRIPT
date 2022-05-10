//criar um método para ler propriedades de um objeto e 
//exibir somete as propriedades do tipo string que estão nesse objeto
const filme  = {
    titulo: 'Vingadores',
    ano: 2019,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirpropriedades(filme);
function exibirpropriedades(obj){
    for (drop in obj)
    if(typeof obj[drop] ==='string')
    console.log(drop,obj[drop])
}
