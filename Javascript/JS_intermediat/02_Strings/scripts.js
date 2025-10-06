//Strings
// Texto maiúsculo ou minúsculo

let message = 'Estou estudando os fundamentos do Javascript.'
console.log(message)

//Exibir o texto em maiúsculo
console.log(message.toUpperCase())

//Exibir o texto em minúsculo
console.log(message.toLowerCase())

//Obter o comprimento de uma string
console.log(message.length)

let password = '123456'

if(password.length < 6) {
    console.log('A senha precisa ter ao menos 6 caracteres')
}

// Quantos digitos tem um número
let value = 12345
console.log(String(value).length)
console.log(value.toString().length)

//Substituindo e fatiando um texto
let message2 = 'Estou estutando os fundamentos do JS'

//Substituindo parte de um texto
console.log(message2.replace('JS', 'Javascript'))

//Extraindo uma parte da string (start, end)
console.log(message2.slice(6, 30))

//Extraindo uma parte da string de trás para frente (end, start)
console.log(message2.slice(-17))

// Removendo espaços em branco de uma string (Do começo e do fim)
let textWithSpace = '          Texto de Exemplo          '
console.log(textWithSpace.length)
// '.trim()' => remove espaços em branco do começo e do fim de uma string
console.log(textWithSpace.trim())

//Completando uma Sring
const creditCard = '1234567812344928'
//console.log(creditCard.length)

// Pega ps 4 últimos digitos
const lastDigits = creditCard.slice(-4)
//console.log(lastDigits)

// o padStart preenche a string do início
const maskedNumber = lastDigits.padStart(creditCard.length, 'X')
console.log(maskedNumber)

// o padEnd preenche a tring no final
const number = '123'
console.log(number.padEnd(10, '#'))

//Separando e unindo strings
let text = 'Estudar, aprender, praticar'

//Separar a string
let separate = text.split(',')
console.log(separate)

let message3 = 'Estou aprendendo Javascript'
console.log(message3.split(' '))

//Unir a string
let joined = separate.join(' - ')
console.log(joined)

//Encontrando um conteúdo na string

let message4 = 'Estou estudando os fundamentos do Javascript'

//Obtém a posição da palavra
console.log(message4.indexOf('Javascript'))
//Quando não encontra a palavra, retorna -1
//console.log(message4.indexOf('javascript'))

//Verifica se existe a palavra na string.
console.log(message4.includes('Javascript'))

