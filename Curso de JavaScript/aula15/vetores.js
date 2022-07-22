let vetor = [5, 8, 2, 9, 3]
           //0, 1, 2, 3, 4

console.log(`O vetor tem ${vetor.length} posições`)

/* UTILIZANDO O FOR NORMAL
for( let pos = 0; pos < vetor.length; pos++){ //Mostrando valor separado, criando uma variavel para caracterizar cada posição
    console.log(`a posição ${pos} tem o valor ${vetor[pos]}`) //Imprimindo o valor no console
}
*/

//UTILIZANDO FOR PARA ARRAYS E OBJETOS
for(let pos in vetor){ //Para cada posição na variável composta (vetor) vai mostrar o vetor[pos]
    console.log(`a posição ${pos} tem o valor ${vetor[pos]}`)
}

let pos = vetor.indexOf(8) //Ele procura se há esse valor no vetor e retorna a posição do elemento, caso não haja o valor no vetor ele retorna o valor -1
if (pos === -1){
    onsole.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

