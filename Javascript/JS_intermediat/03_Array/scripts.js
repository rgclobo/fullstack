//Criando um Array com construtor.
const newArray = new Array()
console.log(newArray)
console.log('Ricardo'.length)

// Retorna o tamanho do array
console.log(newArray.length)

// [] - Array
// {} - Object

// Cria o array com 10 posições vazias
const available = new Array(10)
console.log(available)
console.log(available.length)

// Criando e acessando um array
// Cria o array
let fruits = ['Apple', 'Banana', 'Orange', 'Watermelon']
console.log(fruits)
// Quantidade de itens do array
console.log(fruits.length)
// Acessa o item pelo indice
console.log(fruits[2])
// Quando tentar acessar um indice que não existe, retornar undefined
console.log(fruits[5])
// Obtem dinamicamente o último item
console.log(fruits[fruits.length - 1])

// Converter uma string em um Array
let fullName = 'Ricardo Gimenez Carneiro Lobo'
console.log(fullName)

//Cria um array com os nomes separando pelo espaço
console.log(fullName.split(' '))

//Cria um array com as letras.
console.log(Array.from(fullName))

//Adicionando e removendo itens de um Array
let users = []

//Adiciona um item no final do Array
users.push('Ricardo')
users.push('Gabriela')
users.push('Ethan')

//Adiciona um item no inicio do Array
users.unshift('Ana')

// Remove do inicio do Array
users.shift()

// Remove do final do Array
users.pop()

console.log(users)

// Usando o indice
let fruits2 = ['Mango', 'Melon', 'Strawberry', 'Lemon']

// Encontra e retorna o indice do elemento no Array
let position = fruits2.indexOf('Lemon')
console.log(position)

//Remove um item pela posição do índice (1 é o númerp de itens para remover)

//fruits2.splice(1, 2)
fruits2.splice(position, 1)
console.log(fruits2)

//Quais elementos o array suporta
let myArray = [
    'Um texto',
    10,
    true,
    function(){
        return 'Função dentro do Array'
    },
    {
        name: 'Ricardo',
        email: 'ricardo@email.com'
    }
]

// Text
console.log(myArray[0])

//Number
console.log(myArray[1])

// Boolean
console.log(myArray[2])

//Function
console.log(myArray[3]())

//Object
console.log(myArray[4].name, myArray[4].email)

//Verificando se existe um item dentro do array
let fruits3 = ['Apple', 'Orange', 'Banana', 'Strawberry']

console.log(fruits3.includes('Apple'))
console.log(fruits3.includes('Lemon'))



