/*
    OBJETOS
    -- Uma coleção de dados e/ou funcionalidades;
    -- Podem ter propriedades e métodos;
*/

// Cria um objeto vazio
const obj = {}
console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos.
const user = {
    email: 'ricardo@email.com',
    age: 32,
    name: {
        first_name: 'Ricardo',
        surname: 'Lobo'
    },
    adress:{
        street: 'Rua Y',
        number: 1,
        city: 'Curitiba',
        postal_code: '12345-789'
    },
    message: function(){
        console.log('Oi Ricardo')
    },
    message2: function(){
        console.log(`Oi ${this.name.first_name} ${this.name.surname}`)
    },

}

user.message2()

//Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email)

// Acessando propriedades de objetos.
console.log(user.name.first_name)

//Executa o método do objeto
user.message()

// notação de colchetes
console.log(user['email'])
console.log(user['name']['first_name'])
user['message']()

let prop = 'email'
prop = 'age'
console.log(user[prop])

user.message2()

//atualizando um objeto
const product = {
    name: 'Teclado',
    quantity: 100,
}

//Acessando a propriedade do objeto
console.log(product.name)

//Atualiza o valor de uma propriedade
console.log(product.quantity)
product.quantity = 90
console.log(product.quantity)

console.log(product.name)
product.name = 'Mouse'
console.log(product.name)

// Notação de colchetes
product['quantity'] = 50
console.log(product)

/*
    OPTIONAL CHAINING (?.)

    útil ao explorar o conteúdo de um objeto quando não existe garantia da exitência de determinadas propriedades obrigatórias
*/

const user4 = {
    id: 1,
    name: 'Ricardo',
    /*addres: {
        street: 'Rua dos bobos',
        city: 'Tão distante',
        geo: {
            latitude: 47.408,
            longitude: 17.877,
        },
    },*/
    message: function() {
        console.log(`Olá, ${this.name}!`)
    },
}
console.log(user4?.adress)
console.log(user4?.addres?.street)

user4.message()

/*
    OPERADOR DE COALESCÊNCIA NULA (??)
    Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário ele retorna o seu operando do lado esquerdo.

    false ou 0 não funciona, pois da "true"
*/

let content = undefined
content = null
content = 'Conteúdo da variavel'
content = false
content = 0
console.log(content ?? 'Conteúdo padrão')
// Funciona com o false e o 0 "igual ao if"
console.log(content || 'Conteúdo padrão')

const user5 = {
    name: 'Ricardo',
    avatar: undefined,
}

console.log(user5.avatar ?? 'default.png')

//Função construtora
function createProduct(name) {
    const product = {}

    product.name = name
    product.details = function() {
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}
// o new cria um novo objeto utilizando a estrutura da função construtora.
const product1 = new createProduct('Teclado')
console.log(product1.name)
product1.details()

const product2 = new createProduct('Mouse')
console.log(product2.name)
product2.details()

//console.log(product1 === product2)

//Exemplos de funções construtoras disponíveis no próprio JS
let myName = new String('Ricardo')
console.log(myName)

let price = '40.6'.replace('.', '')
console.log(price)

let date = new Date('2024-1-1')
console.log(date)

function Person(name){
    this.name = name
    this.message = function() {
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = new Person('Felipe')
console.log(person1.name)
person1.message()

const person2 = new Person('Eduardo')
console.log(person2.name)
person2.message()
