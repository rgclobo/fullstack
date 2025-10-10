// Data e Hora
/* 
// Obtendo data e hora
    // Exibe data e hora atual
console.log(new Date())
    // Exibe a data de ínicio do timestamp
console.log(new Date(0))
    // Exibe um número de milissegundos
console.log(new Date().getTime())*/

/* 
// Definindo uma data e hora especifica
    //Define com ano, mês (0 - 11), dia
console.log(new Date(2025, 9, 10))

    // Define data e hora
console.log(new Date(2025, 9, 10, 14, 30, 0))

    // Define data e hora com string
console.log(new Date("2025-9-10T14:35:00"))*/

/* 
// Métodos para trabalhar com data e hora
let date = new Date('2025-09-10T14:35:00')
    // dia da semana de 0 à 6 (domingo é 0)
console.log(date.getDay())

    // dia do mếs (0 à 30)
console.log(date.getDate())

    // mês (0 à 11)
console.log(date.getMonth())

    // Ano
console.log(date.getFullYear())

    // Horas
console.log(date.getHours())

    // Minutos
console.log(date.getMinutes())

    // Segundos
console.log(date.getSeconds()) */

/* 
//Modificando uma data e hora
let date = new Date('October 10, 2025 14:45:35')

    // Modificiar o ano
date.setFullYear(2034)

    // Modificar o mếs (começa com 0)
date.setMonth(2)

    // Modificar o dia
date.setDate(12)

    //Modificar a hora
date.setHours(12)

    //Modificar o minuto
date.setMinutes(12)

    //Modificaro segundo
date.setSeconds(12)
console.log(date) */

/* 
//Formatando uma data e hora
let date = new Date('2025-09-09T14:35:00')

    //Formata para o dia sempre ter dois digitos
let day = date.getDate().toString().padStart(2, '0')
// console.log(day)

    //Formata para o mês sempre ter dois digitos
let month = (date.getMonth() + 1).toString().padStart(2, '0')
// console.log(month)

let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}:${minutes}`) */

/* 
//Convertendo uma data e hora
let date = new Date('2025-09-09T14:35:00')
    //Converte para string
console.log(date.toString())
    // Retorna somente a data.
console.log(date.toDateString())
    //Retorna somente a hora.
console.log(date.toTimeString())
    // ISO Date
console.log(date.toISOString()) */

/* 
// Exibindo data e hora formatada pelo local
let date = new Date('2025-09-09T14:35:00')
    // Exibe a data e hora no formato local
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

    //Exibe a data e hora no formato escolhido
console.log(date.toLocaleDateString('en'))
console.log(date.toLocaleTimeString('en')) */

/* 
//Usando o toLocaleString()
let date = new Date('2025-09-09T14:35:05')

console.log(date.toLocaleString())

console.log(date.toLocaleString('en'))
console.log(
    date.toLocaleString('pt-BR', {
        dateStyle: 'short'
    })
)

console.log(
    date.toLocaleString('pt-BR', {
        dateStyle: 'long'
    })
)

console.log(
    date.toLocaleString('pt-BR', {
        dateStyle: 'medium'
    })
)

console.log(
    date.toLocaleString('pt-BR', {
        dateStyle: 'full'
    })
)

console.log(
    date.toLocaleString('pt-BR', {
        day:'2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    })
)

// o (toLocaleString), não é exclusivo para data e hora, ele é para localização
let amount = 12.5
console.log(amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})) */

/* 
// Intl é a API de Internacionalização do ECMAScript.
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

// Exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat('pt-BR').format(new Date()))
console.log(new Intl.DateTimeFormat('en-US').format(new Date()))

const date = new Date()
//Obtem a diferença em minutos do timezone.
console.log(date.getTimezoneOffset())

//Obtem a diferença em horas do timezone.
console.log(date.getTimezoneOffset() / 60) */

//Criando uma data e hora com o deslocamento do fuso
const dateWithTimeZone = new Date('2025-10-10T20:12:57.749-03:00')
// console.log(dateWithTimeZone.toISOString())

console.log(new Date().toLocaleString())
console.log(dateWithTimeZone.toLocaleString())


