
let game = document.querySelector('.game')
let tip = document.querySelector('.tip')

let houses = ['casa1', 'casa2', 'casa3', 'casa4', 'casa5']
let temas = ['cores', 'nacionalidades', 'bebidas', 'cigarros', 'animais']
let arrays = []
let tips = []
let coresTotal = ['azul', 'vermelho', 'amarelo', 'verde', 'roxo']

arrays = [
    [temas[0], 'amarelo', 'azul', 'roxo', 'verde', 'vermelho'],
    [temas[1], 'alemao', 'dinamarques', 'ingles', 'noruegues', 'sueco'],
    [temas[2], 'agua', 'cafe', 'cerveja', 'cha', 'leite'],
    [temas[3], 'Blends', 'Blue-Master','Dunhill', 'Pall-Mall', 'Prince'],
    [temas[4], 'cachorros', 'cavalos', 'gatos', 'passaros', 'peixes']
]

tips = [
    '1-O Inglês vive na casa Vermelha.',
    '2-O Sueco tem Cachorros como animais de estimação.',
    '3-O Dinamarquês bebe Chá.',
    '4-A casa Verde fica do lado esquerdo da casa Roxa.',
    '5-O homem que vive na casa Verde bebe Café.',
    '6-O homem que fuma Pall Mall cria Pássaros.',
    '7-O homem que vive na casa Amarela fuma Dunhill.',
    '8-O homem que vive na casa do meio bebe Leite.',
    '9-O Norueguês vive na primeira casa.',
    '10-O homem que fuma Blends vive ao lado do que tem Gatos.',
    '11-O homem que cria Cavalos vive ao lado do que fuma Dunhill.',
    '12-O homem que fuma Blue Master bebe Cerveja.',
    '13-O Alemão fuma Prince.',
    '14-O Norueguês vive ao lado da casa Azul.',
    '15-O homem que fuma Blends é vizinho do que bebe Água.',
]

function createElementsHouse(tag, className, valor, data, name, id) {
    const element = document.createElement(tag)
    element.className = className
    element.textContent = valor
    element.setAttribute(`data-${data}`, `${name}`)
    element.setAttribute('id', `${id}`)
    element.setAttribute('enabled', '')
    return element
}

function createHouses() {
    for (let index = 1; index < 1 + houses.length; index++) {
        const h1 = createElementsHouse('h1', '', `Casa ${index}`, '', '', '')
        game.append(h1)
    }

    for (const key in houses) {
        const i = +key + 1
        const house = createElementsHouse('div', `house`, '', `casa`, `${i}`, `casa${i}`)
        game.append(house)
        for (idx = 0; idx < 5; idx++) {
            let num = idx + 1
            forSelect(house, arrays[idx], num, i)
        }
    }
}

//Criar Select e Option
function forSelect(casa, arrayRecebido, num, numCasa) {
    const arayidx = arrayRecebido
    const select = createElementsHouse('select', `select select-${arayidx[0]}`, ``, 'select', `${arayidx[0]}`, `select${numCasa}${num}`)

    for (const i of arayidx) {
        const option = createElementsHouse('option', `colors option-${i}`, i, `${arayidx[0]}`, `${i}`, `${numCasa}${num}${i}`)
        option.setAttribute('value', `${i}`)
        select.setAttribute('value', `${arayidx[0]}`)
        select.append(option)
        casa.append(select)
    }
}

//Criação dos elemetos do TIP
function createElementsTip(tag, className, valor) {
    const elementoo = document.createElement(tag)
    elementoo.className = className
    elementoo.textContent = valor
    return elementoo
}

//Estruturação dos elementos em TIP
function createTip() {
    for (const key in tips) {
        const id = +key + 1
        const divPai = createElementsTip('div', `text id${id}`)
        const symbol = createElementsTip('div', `symbol id${id}`)
        const text = createElementsTip('div', `textos ${id}`, `${tips[key]}`)
        divPai.append(symbol)
        divPai.append(text)
        tip.append(divPai)
    }
}

//execução da criação das casas
createHouses()
createTip()