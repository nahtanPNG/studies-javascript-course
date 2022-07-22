function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value) //Convertendo para number
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulto.png')
            } else {
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
        genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50){
                img.setAttribute('src', 'adulta.png')
            } else {
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}