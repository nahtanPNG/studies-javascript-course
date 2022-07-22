function tabuada(){
    let numero = document.getElementById('number')
    let select = document.getElementById('seltab')

    if (numero.value == ''){
        window.alert('O valor digitado é inválido, por favor digite um valor válido!')
    } else{
        let n = Number(numero.value)
        let c = 1
        select.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option') //Criando opções no select
            item.text = `${n} x ${c} = ${n*c}`
            select.appendChild(item) //Criando os itens(filhos) no select
            c++ 
        }

    }
}