/* 
    Técnica:
        2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

        IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
*/

function verificarLetra(texto ){

    let formatar= texto.toLowerCase()
    let posicoes = Array()
    let transformarEmArray = Array.from(formatar)
    
    if(transformarEmArray.indexOf('a') != -1){
        transformarEmArray.filter((letra, indice) => {
            if(letra == 'a'){
                posicoes.push(indice+1)
            } 
        })
        console.log(`Encontramos a letra -A- na(s) posição(ões) ${posicoes.join(', ')}`)
    }
    else {
        console.log(`No texto digitado ${texto} não foi encontrada a letra A`)
    }

}

verificarLetra('fdghfghfghfgh')
verificarLetra('SGDFADFPKAMANKNEKNREKA')
verificarLetra('ASDAsdasDAsa')