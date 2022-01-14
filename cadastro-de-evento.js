/* 
    Aluno: Maicon Silva de Sousa
    Data: 14/01/2022
    Prog: Cadastro para evento
*/

// Veririficar data do evento
let data_atual = new Date('January 14, 2022 00:00:00');
let data_do_evento = new Date('January 17, 2022 00:00:00');

if(data_atual.getTime() < data_do_evento.getTime()){
    console.log("Cadastro liberado, evento ainda não realizado.")
}
else{
    console.log("Cadastro não permitido, evento encerrado.")
}

//Verificar idade
let idade = 18

if(idade >= 17){
    console.log("Cadastro permitido, idade suficiente")
}
else{
    console.log("Cadastro não é permitido pela idade.")
}

//Lista participantes e palestrantes

let participantes_Evento1 = ['joão','Pedro','josé','Vitor','Ana']
let participantes_Evento2 = ['Cleiton','Amanda','josé','Hugo','Jéssica']

let palestrantes_evento1 = ['Maria','Guilherme']
let palestrantes_evento2 = ['Maria','Bob']

console.log("Evento 1:")
console.log("Lista de partipantes: "+participantes_Evento1)
console.log("Lista de palestrantes: "+palestrantes_evento1)

console.log("Evento 2:")
console.log("Lista de partipantes: "+participantes_Evento2)
console.log("Lista de palestrantes: "+palestrantes_evento2)

//Verificar quantidade de vagas por evento
if(participantes_Evento1.length <= 100){
    console.log("Cadastro permitido, número de vagas suficiente.")
}
else{
    console.log("Cadastro não permitido, número de vagas insuficiente.")
}