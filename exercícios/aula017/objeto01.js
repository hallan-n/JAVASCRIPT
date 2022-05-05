let amigo = {nome:'Hállan', sexo:'M', peso: 80.6, engordar(p=0){
    this.peso += p 
}}
amigo.engordar(2350)
console.log(`A pessoa ${amigo.nome} pesa ${amigo.peso}kg`)