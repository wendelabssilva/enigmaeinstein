
const todasCasas = document.querySelectorAll('.house')
const todosTextos = document.querySelectorAll(`.text`)

function checarDesafios() {
    checkTipIncorrect()
    removeSymbol()
    addMesmaCasa()
    addCasaDiferentes()
    checkTipCorrect()
    checkTipIncorrect()
}

function addMesmaCasa() {
    for (const casa of todasCasas) {
        const haCor = casa.hasAttribute('data-cores')
        const haNac = casa.hasAttribute('data-nacionalidades')
        const haBeb = casa.hasAttribute('data-bebidas')
        const haAni = casa.hasAttribute('data-animais')
        const haCig = casa.hasAttribute('data-cigarros')

        checkMesmaCasa(haCor, haNac, casa, '1', 'cores', 'nacionalidades', 'vermelho', 'ingles') //check1
        checkMesmaCasa(haAni, haNac, casa, '2', 'animais', 'nacionalidades', 'cachorros', 'sueco') //check2
        checkMesmaCasa(haBeb, haNac, casa, '3', 'bebidas', 'nacionalidades', 'cha', 'dinamarques') //check3
        checkMesmaCasa(haBeb, haCor, casa, '5', 'bebidas', 'cores', 'cafe', 'verde') //check5
        checkMesmaCasa(haAni, haCig, casa, '6', 'animais', 'cigarros', 'passaros', 'Pall-Mall') //check6
        checkMesmaCasa(haCor, haCig, casa, '7', 'cores', 'cigarros', 'amarelo', 'Dunhill') //check7
        checkMesmaCasa(haBeb, haCig, casa, '12', 'bebidas', 'cigarros', 'cerveja', 'Blue-Master') //check12
        checkMesmaCasa(haNac, haCig, casa, '13', 'nacionalidades', 'cigarros', 'alemao', 'Prince') //check13
        checkNumberCasa(haBeb, casa, '8', '3', 'leite', 'bebidas') //check8
        checkNumberCasa(haNac, casa, '9', '1', 'noruegues', 'nacionalidades') //check9
    }
}

function checkMesmaCasa(haCor, haNac, casa, id, tipo1, tipo2, tipo3, tipo4) {
    const myId = document.querySelector(`.id${id}`)
    if (haCor === true && haNac === true) {
        const tip1 = casa.getAttribute(`data-${tipo1}`)
        const tip2 = casa.getAttribute(`data-${tipo2}`)
        if (tip1 === tipo3 && tip2 === tipo4) { addSymbol(myId) }
    }
}

function checkNumberCasa(haBeb, casa, id, numCasa, opcao, tipo) {
    const myId = document.querySelector(`.id${id}`)
    if (haBeb === true) {
        const myCasa = casa.getAttribute('data-casa')
        const myOpcao = casa.getAttribute(`data-${tipo}`)
        if (myOpcao === opcao && myCasa === numCasa) { addSymbol(myId) }
    }
}

function addCasaDiferentes() {
    checkVizinhos('verde', 'cores', 'roxo', 'cores', '4') //verde lado esquerdo roxo
    checkVizinhos('Blends', 'cigarros', 'gatos', 'animais', '10') //blends ao lado gatos
    checkVizinhos('Dunhill', 'cigarros', 'cavalos', 'animais', '11') ///Dunhill ao lado cavalos
    checkVizinhos('noruegues', 'nacionalidades', 'azul', 'cores', '14') //noruegues ao lado azul
    checkVizinhos('Blends', 'cigarros', 'agua', 'bebidas', '15') //Blends ao lado agua
}

function checkVizinhos(recebe1, atributo1, recebe2, atributo2, id) {
    for (const casa1 of todasCasas) {
        const haCor = casa1.hasAttribute(`data-${atributo1}`)
        if (haCor === true) {
            const cores = casa1.getAttribute(`data-${atributo1}`)
            if (cores === recebe1) {
                for (const casa2 of todasCasas) {
                    const haCor = casa2.hasAttribute(`data-${atributo2}`)
                    if (haCor === true) {
                        const cores = casa2.getAttribute(`data-${atributo2}`)
                        if (cores === recebe2) {
                            const casaPri = casa1.getAttribute('data-casa')
                            const casaSeg = casa2.getAttribute('data-casa')

                            const primeiro = casa1.getAttribute(`data-${atributo1}`)
                            const segundo = casa2.getAttribute(`data-${atributo2}`)

                            let distancia = Number(casaPri) - Number(casaSeg)
                            const myId = document.querySelector(`.id${id}`)

                            if (distancia < -1) {
                                if (primeiro === 'verde' || segundo === 'roxo') { addSymbol(myId) }
                            } else if (distancia === -1) {
                                if (primeiro === 'verde' || segundo === 'roxo') { addSymbol(myId) }

                                if (primeiro === 'gatos' || segundo === 'gatos') { addSymbol(myId) }

                                if (primeiro === 'cavalos' || segundo === 'cavalos') { addSymbol(myId) }

                                if (primeiro === 'noruegues' || segundo === 'noruegues') { addSymbol(myId) }

                                if (primeiro === 'agua' || segundo === 'agua') { addSymbol(myId) }
                            } else if (distancia === 1) {
                                if (primeiro === 'gatos' || segundo === 'gatos') { addSymbol(myId) }

                                if (primeiro === 'cavalos' || segundo === 'cavalos') { addSymbol(myId) }

                                if (primeiro === 'noruegues' || segundo === 'noruegues') { addSymbol(myId) }

                                if (primeiro === 'agua' || segundo === 'agua') { addSymbol(myId) }
                            }
                        }
                    }
                }
            }
        }
    }
}

function addSymbol(id) {
    id.classList.add('check')
    id.children[0].classList.add('addSymbolCorrect')
    id.children[1].classList.add('correct')
}

function removeSymbol() {
    const checkAll = document.querySelectorAll(`.check`)
    checkAll.forEach(elemento => {
        elemento.classList.remove('check')
        elemento.children[0].classList.remove('addSymbolCorrect')
        elemento.children[1].classList.remove('correct')
    })
}

function checkTipCorrect() {
    const checkAll = document.querySelectorAll(`.check`)
    checkAll.forEach((el, val) => {
        const checkAcertos = +val + 1
        if (checkAcertos === 15) {
            terminouPartida('Parabéns, você venceu!')
        }
    })
}

function checkTipIncorrect() {
    const todasCasas = document.querySelectorAll(`.house`)
    const checkCasaCompleta = document.querySelectorAll(`.casaCompleta`)
    const todosTextos = document.querySelectorAll(`.text`)
    const check = document.querySelectorAll('.check')
    todasCasas.forEach(casa => {
        const cor = casa.hasAttribute('data-cores')
        const nac = casa.hasAttribute('data-nacionalidades')
        const beb = casa.hasAttribute('data-bebidas')
        const cig = casa.hasAttribute('data-cigarros')
        const ani = casa.hasAttribute('data-animais')

        if (cor === true && nac === true && beb === true && cig === true && ani === true) { casa.classList.add('casaCompleta') }
    })
    if (checkCasaCompleta.length === 5) {
        todosTextos.forEach(unidade => {
            const haCheck = unidade.classList.contains('check')
            if (haCheck === false) {
                unidade.children[0].classList.add('addSymbolIncorrect')
            }
        })
        if (check.length !== 15) {    
            terminouPartida('Poxa, não foi dessa vez!')
        }
    }
}



function terminouPartida(frases) {
    const gameResult = document.querySelector('.gameResult')
    const btnMostrar = document.querySelector('.visualisar')
    const btnReiniciar = document.querySelector('.reiniciar')
    const btnReiniciarFora = document.querySelector('.reiniciarFora')
    const resultado = document.querySelector('.gameResult')
    const resul = document.querySelector('.resultado')
    const frase = document.querySelector('.frase')
    const btn1 = document.querySelector('.btn1')
    
    gameResult.classList.add('win')
    resul.style.display = 'flex'
    frase.innerHTML = frases

    btnMostrar.addEventListener('click', () => {
        resultado.style.display = 'none'
        resul.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
        btn1.style.display = 'flex'
    })

    btnReiniciar.addEventListener('click', () => {
        window.location.reload(true);
    })
    
    btnReiniciarFora.addEventListener('click', () => {
        window.location.reload(true);
    })
}