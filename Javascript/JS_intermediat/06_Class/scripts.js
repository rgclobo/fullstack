// Classes
    /* Criando Classes com um Metodo construtor*/
/* class Person {
    constructor(name){
        console.log('Olá', name )
    }
}
const person = new Person('Ricardo') */

    /* Criando propriedades dentro das classes */
/* class Product {
    constructor(name) {
        this.name = name
    }
}

const product1 = new Product('Teclado')
console.log(product1.name)

const product2 = new Product('Mouse')
console.log(product2.name) */

    /* Adicionando Metodos nas Classes */
/* class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    sendEmail(){
        console.log('E-mail enviado para', this.name, 'no endereço eletrônico', this.email)
    }
}

const user = new User('Ricardo', 'ricardo@email.com')
user.sendEmail() */

    /* O que é metodo estático */
/* class User {
    static showMessage() {
        console.log('Essa é uma mensagem ....')
    }
}

//const user = new User()
//user.showMessage()

User.showMessage() */

    /* Como aplicar herança com classes */
/* class Animal {
    constructor(name) {
        this.name = name
    }
    makeNoise() {
        console.log('Algum som genérico do animal')
    }
}

class Dog extends Animal {
    makeNoise() {
        console.log('Au Au Au!')
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log('Miaaaaaaaaaaaaau!')
    }
}

const dog = new Dog('Fellipo')
console.log(dog.name)
dog.makeNoise()


const cat = new Cat('Kiara')
console.log(cat.name)
cat.makeNoise() */

    /* Aprendendo sobre herança e cadeia de prototipos 
        - Criando um objeto prototype */

/* const address = {
    city: 'Curitiba',
    country: 'Brazil',
}
console.log(address)

const users = ['Ricardo', 'Ethan', 'Gabriela']
console.log(users)

const userName = 'Ricardo Lobo'
console.log(userName.__proto__) */

/* const values1 = [1, 2, 3, 4, 5]

const soma = values1.reduce((acumulador, atual) => acumulador + atual, 0)

console.log(soma);

console.log('--------')

let acumulador = 0
for(let i = 0;i < values1.length; i++){
    const atual = values1[i]
    acumulador += atual
}
console.log(acumulador)

console.log('--------')

// Adiciona um método ou propriedade em um objeto(classe, etc)
Array.prototype.sum = function() {
    let acumulador = 0
    for(let i = 0;i < values1.length; i++){
        const atual = values1[i]
        acumulador += atual
    }
    return acumulador
}

console.log(values1.sum()) */

    /* Como utilizar classes para lidar com excessões */

/* let obj = [17]
let index = 300

try {
    //obj.execute()

    if(!obj.includes(17)){
        throw new Error('O número 17 não está disponível')
    }

    if (index > 99) {
        throw new RangeError('O número está fora do intervalo. Escolha um número de 0 à 99.')
    }
} catch (error) {
    if(error instanceof TypeError){
        console.log('Método indisponível.')
    } else if (error instanceof RangeError) {
        console.log(error.message)
    } else {
        console.log('Não foi possível realizar a ação.')
    }
} */

    /* Como utilizar classes para criar erros customizados
        - Custom errors */

class MyCustomError {
    constructor(message) {
        this.message = `CLASSE DE ERRO CUSTOMIZADA: ${message}`
    }
}

try {
    // throw new Error('Erro genérico')
    throw new MyCustomError('Erro personalizado lançado!')
} catch (error) {
    if (error instanceof MyCustomError) {
        console.log(error.message)
    } else {
        console.log('Não foi possível executar!')
    }
}
