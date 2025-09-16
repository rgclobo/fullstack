//Operadores Aritméticos
//SOMA
console.log("SOMA 12 + 2:", 12 + 2)

//SUBTRAÇÃO
console.log("SUBTRAÇÃO 12 - 2:", 12 - 2)

//MULTIPLICAÇÃO
console.log("MULTIPLICAÇÃO 12 * 2:", 12 * 2)

//DIVISÃO
console.log("DIVISÃO 12 / 2:", 12 / 2)

//RESTO DA DIVISÃO
console.log("RESTO DA DIVISÃO 13 % 2:", 13 % 2)

//EXPONENCIAL
console.log("EXPONENCIAL 3 ** 3: ", 3 ** 3)

//Para converter minutos e segundos
let segundos = 120 // Teste com 59, 60 e 120 para entender
console.log('Minutos: ', parseInt(segundos / 60))
console.log('Segundos: ', segundos % 60)


//Incremento e Decremento
let number = 10

//Incremento
number++

//Incremento após, por isso não mostra no console
console.log(number++)
console.log(number)

//Incrementa antes
console.log(++number)

//Decremento
// console.log("Decremento após: ", number--)
//console.log(number--)
console.log("Decremento antes: ", --number)

//Incremento de mais de um valor
number += 10
console.log(number)

//Decremento de mais de um valor
number -= 2
console.log(number)

number = number + 20
console.log(number)
number = number - 20
console.log(number)

//Grouping Operator
let total1 = 2 + 3 * 4
console.log(total1)

let total2 = (2 + 3) * 4
console.log(total2)

let average = (9.5 + 7 + 5) / 3
console.log(average)

//Operadores lógicos
let one = 1
let two = 2

// == igual a
console.log("### IGUAL A ###")
console.log(one == two)
console.log(one == 1)
console.log(one == "1")

// != diferente de
console.log("### DIFERENTE DE ###")
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// === estritamente igual a (tipo e valor)
let one1 = 1
let two2 = 2

console.log(one1 === 1)
console.log(one1 === "1")

// !== estritamente diferente de (tipo e valor)
console.log(one1 !== two2)
console.log(one1 !== 1)
console.log(two2 !== 2)
console.log(two2 !== "2")

// > Maior, < menor e igual
let balance = 500
let payment = 120

// > Maior que
console.log(balance > payment)

// < Menor que
console.log(balance < payment)

// >= Maior ou igual a 
balance = 120
console.log(balance >= payment)

// =< Menorr ou igual a 
balance = 500
console.log(balance <= payment)


// Operador de Atribuição "="
value = 10
console.log(value)

// Decremento
value -= 1
console.log(value)

// Incremento
value += 1
console.log(value)

//Multiplicar
value *= 3
console.log(value)

// Divisão
value /= 2
console.log(value)

// Potencia
value **= 2
console.log(value)

// Resto da divisão
value %= 2
console.log(value)

// Operadores Lógicos
let emailIsValid = true
let passwordIsValid = true

// AND (E) - && (Para retornar true se todas devem ser verdadeiras)
console.log(emailIsValid && passwordIsValid)

// OR (OU) - || (Para retornar true, necessitada apenas uma ser verdadeira)
passwordIsValid = false
console.log(emailIsValid || passwordIsValid)

// NOT (negação) - ! (Inverte a condição)

console.log(emailIsValid, !emailIsValid)
console.log(passwordIsValid, !passwordIsValid)





