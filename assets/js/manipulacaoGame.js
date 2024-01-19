let minhaCasa = ''
let meuSelect = ''
let meuValueSelect = ''
let meuValorFinal = ''
let todosMeusOptionsNode = ''
let meuOption = ''
let optionSecundario = ''

const casasTotal = document.querySelectorAll('.house')

function createEventChangeFullOption() {
    const select = document.querySelectorAll('.select')
    select.forEach((selects) => {
        selects.addEventListener("change", (event) => {
            meuSelect = event.target
            minhaCasa = meuSelect.parentNode
            meuValueSelect = meuSelect.getAttribute('value')
            pegarOption()
            addSelectedAndAttribute()
            removeSelectedAndAttribute()
            addBackGroundColor()
            removerBackGroundColor()
            checarDesafios() //Função Em manipulacaoTip.js
        });
    })
}

function pegarOption() {
    todosMeusOptionsNode = meuSelect.children
    meuValorFinal = meuSelect.value

    for (const options of todosMeusOptionsNode) {
        if (options.value === meuValorFinal) {
            meuOption = options
        }
    }
}

function addSelectedAndAttribute() {
    meuOption.setAttribute('selected', '')
    minhaCasa.setAttribute(`data-${meuValueSelect}`, `${meuValorFinal}`)
}

function removeSelectedAndAttribute() {
    for (const options of todosMeusOptionsNode) {
        const hasSelected = options.hasAttribute('selected')

        if (hasSelected === true) {
            if (options.value !== meuOption.value) {
                optionSecundario = options
            }
            if (optionSecundario !== null && optionSecundario !== '') {
                const hasAttribute = optionSecundario.hasAttribute('selected')
                if (hasAttribute === true) {
                    optionSecundario.removeAttribute('selected')
                }
            }
        }
    }
}

function addBackGroundColor() {
    const tipos = meuSelect.getAttribute('data-select')
    if(tipos === 'cores') {
        minhaCasa.classList.add(`${meuValorFinal}`)
    }

}

function removerBackGroundColor() {
    const todasCores = coresTotal
    const tipos = meuSelect.getAttribute('data-select')
    if(tipos === 'cores') {
        for (const cores in todasCores) {
            if(cores !== meuValorFinal) {
                const contem = minhaCasa.classList.contains(`${todasCores[cores]}`)
                if(contem === true) {
                    if(todasCores[cores] !== meuValorFinal) {
                        minhaCasa.classList.remove(`${todasCores[cores]}`)
                    }
                }
            }
        }
    }
    
}

//Execução do Evento Change para Selects
createEventChangeFullOption()
