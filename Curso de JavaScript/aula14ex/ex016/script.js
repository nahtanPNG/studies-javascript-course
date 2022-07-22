var inicio = document.getElementById('início')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

function contar(){
    if( inicio.value == '' || fim.value == '' || passo.value == ''){ //Impossibilitando areas vazias
    res.innerText = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value) //Convertendo para número
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert(' O valor digitado no passo é inválido, considerando passo = 1')
            p = 1
        }
        if (i < f){ //Contagem crescente
          for(let contador = i; contador <= f; contador += p){
            res.innerHTML += ` ${contador} \u{1F449}`
            }
        } else { //Contagem decrescente
            for(let contador = i; contador >= f; c -= p){
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}