/*// Document Object Model - DOM

//Visualizar o conteúdo do document.
// console.log(document)

// Obter o title da página
console.log('### DOM - Obter o title da página ###')
console.log(document.title)
// document.title = 'Mudei o title'

// Obter o elemento pelo ID (Seletor ID)
console.log('### DOM - Obter um elemento pelo ID ###')
const guest = document.getElementById('guest-1')
console.log(guest)

// Mostra as propriedades do objeto
// console.dir(guest)

//Obter elemento com class (Seletor CLASS)
console.log('### DOM - Obter um elemento pela CLASS ###')
const guestByClass = document.getElementsByClassName('guest')
console.log(guestByClass)
//Pegar o elemento especifico 
console.log(guestByClass[0])
console.log(guestByClass.item(1))
console.log(guestByClass.item(2)) // null
console.log(guestByClass[2]) // undefined

// Selecionar uma lista de elementos pela TAG
console.log('### DOM - Obter um elemento pela TAG ###')
const guestByTag = document.getElementsByTagName('li')
console.log(guestByTag)
console.log(guestByTag[1])


// Query Selector - ID
console.log('### DOM - Obter um elemento pela QUERY SELECTOR com ID###')
const guestByQueryId = document.querySelector('#guest-1')
console.log(guestByQueryId)

// Query Selector - Class
// Retorna apenas o primeiro elemento
console.log('### DOM - Obter um elemento pela QUERY SELECTOR com CLASS###')
const guestByQueryClass = document.querySelector('.guest')
console.log(guestByQueryClass)

//Query Selector All - Class
// Retorna todos os elementos com essa classe
console.log('### DOM - Obter um elemento pela QUERY SELECTOR ALL com CLASS###')
const guestByQueryClassAll = document.querySelectorAll('.guest')
console.log(guestByQueryClassAll)

// Manipulando conteúdo
console.log('### DOM - Manipulando elemento pelo QUERY SELECTOR ###')
const guestContent = document.querySelector('#guest-1')
// Retorna o conteúdo como texto.
// console.log(guestContent.textContent)
// guestContent.textContent = 'Ricardo'

console.log(guestContent.textContent) //Retorna o conteúdo visível e oculto
console.log(guestContent.innerText) // Retorna somente o conteúdo visível
console.log(guestContent.innerHTML) // Retorna o conteúdo com a formatação HTML em texto



//Alterando estilos
// console.log('### DOM - Alterando estilos pelo QUERY SELECTOR ###')
// const input = document.querySelector('#name')

// // Adiciona a class
// input.classList.add('input-error')

// //Remove a class
// input.classList.remove('input-error')

// Se não tiver a class adiciona. Se tem, remove.
// input.classList.toggle('input-error')

// const button = document.querySelector('button')
// button.style.backgroundColor = 'red'


//Adicionando conteúdo pela DOM
console.log('### DOM - Adicionando conteúdo pelo createElement ###')
const guests = document.querySelector('ul')
console.log(guests)

const newGuest = document.createElement('li') //Cria o elemento (li)
newGuest.classList.add('guest') // Adiciona a classe para o elemento
newGuest.id = 'guest-8' // Adiciona um ID no elemento
const guestName = document.createElement('span')

guestName.textContent = 'Ricardo'

const guestSurname = document.createElement('span')
guestSurname.textContent = 'Lobo'

// // Adiciona após o último filho
// newGuest.append(guestName, guestSurname)

// //Adiciona antes do primeiro filho
// newGuest.prepend(guestSurname)

//É mais simples que o append e aceita só um argumento
newGuest.appendChild(guestName)
guests.append(newGuest)


// Manipulando atributos
// const input = document.querySelector('input')

//Atualizar um atributo
// input.setAttribute('disabled', true)
// input.setAttribute('type', 'file')

// Remover um atributo
// input.removeAttribute('id')

// Eventos
console.log('### DOM - Eventos ###')
window.addEventListener('load', () => {
    console.log('A pagina foi carregada.')
})

addEventListener('click', (event) => {
    event.preventDefault()

    // Retorna todas as informações do evento
    // console.log(event)

    // Retorna o elemento clicado
    console.log(event.target)

    // console.log(event.currentTarget) 

    console.log(event.type) 
    // Retorna o textContent do elemento clicado
    // console.log(event.target.textContent)
})

// Eventos em um elemento especifico

const ul = document.querySelector('ul')

ul.addEventListener('scroll', (event) => {
    // console.log(event.target.scrollTop)

    if(event.target.scrollTop > 377){
        // console.log('FIM DA LISTA')

        event.target.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
})

const button = document.querySelector('button')

button.addEventListener('click', (event) => {
    event. preventDefault()

    console.log('CLICOU MALANDRO!')
})*/

/*// Eventos de formulário

const form = document.querySelector('form')

form.onsubmit = (event) => {
    event.preventDefault()

    console.log('Vocế fez submit no formulário#1')
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log('Vocế fez submit no formulário#2')
})*/
/*
// eventos em Input
const input = document.querySelector('input')

/* //keydown - quando uma tecla é pressionada ( captura tudo, incluindo CRTL, SHIFT, etc.)
input.addEventListener('keydown', (event) => {
    console.log(event.key)
})*/

/*//keypress - quando uma tecla é pressionad (letras, numeros, pontos, etc.)
input.addEventListener('keypress', (event) => {
    console.log(event.key)
})

input.onchange = () =>{
    inputChange()
}

function inputChange() {
    console.log('O input mudou')
}
*/

/* 
// Expressões regulares

const input = document.querySelector('input')
const form = document.querySelector('form')

/* 
    input.addEventListener('input', () => {
    const value = input.value
    const regex = /\D+/g
    

    // Retorna o padrão encontrado na string
    // console.log(value.match(regex))

    //Valida se o padrão bate
    const isValid = regex.test(value)
    console.log(isValid)
}) 
    */

/* form.addEventListener('submit', (event) => {
    event.preventDefault()
    // const regex = /\D+/g // Remove as letras
    const regex = /\d+/g // Remove os números
    const value = input.value


    if (regex.test(value)) {
        console.log(value)
    } else {
        alert('Valor inválido. Digite corretamente')
    }
    //const value = input.value.replace(regex, '')

    //console.log(value)
})
*/
