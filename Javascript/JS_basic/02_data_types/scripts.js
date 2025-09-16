//Tipo de dados
//String

let username = "Ricardo"
console.log(username)
console.log(typeof username)

console.log("Uma string com aspas")
console.log('Uma string com apóstrofo (aspas simples)')

//Qnd utilizar uma ou outra?
console.log('Uma string com "aspas duplas" dentro de simples')

console.log("Uma string com 'aspas simples' dentro de dupla")

console.log(`
    Uma string com acento grave permite
    escrever múltiplas linhas.`)


//Template literals (template strings, interpolação de strings)
let username2 = "Ricardo"
let email = "ricardo@lobo.com"

//Pode passar mais de um parâmetro.
console.log(username, email, "teste")

//concatenar texto
let message = "Olá, " + username2 + ". Você conectou com o e-mail" + email
console.log(message)

//template literals
//Executa JS entre chaves ${}
console.log(`Olá, ${username2}. Você conectou com o e-mail ${email}.`)

//Number
let number = 5
console.log(number)
console.log(typeof number)

//Inteiro positivo
console.log(10)

//Inteiro negativo
console.log(-7)

//Números reais ou float
console.log(125.7)

//NaN - Not a number
console.log(30 / "ricardo")

//Concatenação de numeral com string
console.log(5 + "5", typeof (5 + "5"))

//Boolean
console.log(true)
console.log(false)

let isLoading = true
console.log(isLoading, typeof (isLoading))

//undefined (indefinido) e null
let emptiness
console.log("O valor é: ", emptiness)

let empty = null
console.log("O valor é: ", empty)
/*
Conversão de tipos (type casting ou type-conversion):
Ocorre quando você explicitamente transforma um valor de um tipo par outro
*/

let value = "9"
console.log(value, typeof value)
console.log(value, typeof Number(value))

let age = 18
console.log(age, typeof age)
console.log(age, typeof String(age))

/*
- Coerção de tipos:
Acontece de forma automática
*/
//Exemplo de coerção de tipos
console.log(typeof ("10" + 5))



