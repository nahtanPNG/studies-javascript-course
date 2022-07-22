var agora = new Date() //Cria a data
var horario = agora.getHours() //Pega a hora
console.log(`Agora são exatamente ${horario} horas.`)

if (horario < 12){
    console.log('Bom dia!')
} else if (horario <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa Noite!')
}