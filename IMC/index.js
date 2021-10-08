function Calcular() {
    let altura = window.document.getElementById('formGroupExampleInput')
    let peso = window.document.getElementById('formGroupExampleInput2')
    let res = window.document.getElementById('res')
    let res2 = window.document.getElementById('res2')

    if (altura.value.length == 0 || peso.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        let a = Number(altura.value)
        let p = Number(peso.value)
        mult = a * 2
        imc = p / mult

        if (imc <= 18.5) {
            res.innerHTML = imc
            res2.innerHTML = '<p>Consequências de estar abaixo do peso</p><ul><li>Unhas e cabelos secos e quebradiços</li><li>Pele seca</li><li>Incapacidade de se concentrar</li><li>Esquecimento</li><li>Exaustão</li><li>Irritabilidade</li><li>Perda de apetite</li><li>Dor nas articulações</li><li>Vertigem</li><li>Sensação de desmaio</li><li>Dores de cabeça</li></ul> '

            } else if (imc < 24.9) {
                res.innerHTML = imc
                res2.innerHTML = '<h4>Peso normal!</h4> <p>asassa</p>'

            } else if (imc < 29.9) {
                res.innerHTML = imc
                res2.innerHTML = '<h1>Sobre peso!</h1> <p>asassa</p>'

            } else if (imc < 34.9) {
                res.innerHTML = imc
                res2.innerHTML = '<h1>Obesidade grau I!</h1> <p>asassa</p>'
            }
            else if (imc < 39.9) {
                res.innerHTML = imc
                res2.innerHTML = '<h1>Obesidade grau II!</h1> <p>asassa</p>'
            }
            else if (imc <= 40) {
                res.innerHTML = imc
                res2.innerHTML = '<h1>Obesidade grau III!</h1> <p>asassa</p>'
            }
        }
}




