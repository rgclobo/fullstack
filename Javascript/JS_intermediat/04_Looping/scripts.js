//Repetições e Iterações
//Loop WHILE
// WHILE: executa até que a condição seja VERDADEIRA

/*let execute = true

while (execute) {
    let response = window.prompt('Deseja continuar? 1 (SIM) ou 2 (NÃO)')

    if (response === '2'){
        execute = false
    }
}

console.log('Segue o fluxo ...')*/

// DO WHILE: Repete até que a condição especificada seja VERDADEIRA. No entanto, a instrução será executada pelo menos uma vez antes da condição ser verificada.

/* let value = 0

do {
    value ++
    console.log(value)
} while (value < 10)

console.log('Segue o fluxo ....')*/

/*
    FOR repete até que a condição especificada seja FALSA.

    - variável de controle
    - condição
    - incremento ou decremento da variável de controle
*/

/*for (let i = 0; i < 10; i++){
    console.log('i =', i)
}

// Exemplo de tabuada
console.log('### TABUADA ###')
console.log(``)*/

/*let number = 7
for (let i = 0; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`)
}

//Tabuada completa
for(let n1 = 0; n1 <= 10; n1++){
    for(let n2 = 0; n2 <= 10; n2++){
        let total = n1 * n2

        console.log(`${n1} * ${n2} = ${total}`)
    }
}*/

/* const frutas = ['Banana', 'Manga', 'Laranja', 'Kiwi']

// Percorrendo array
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}*/

/*
//Array contendo Objetos
const produtos = [
    { nome: 'Notebook', preco: '5000'},
    { nome: 'Celular', preco: '1500'},
    { nome: 'Mouse', preco: '169'}
]

//Percorrendo o Array
for(let i = 0; i < produtos.length; i++) {
    /*const nome = produtos[i].nome
    const preco = produtos[i].preco

    console.log(nome, preco)

    // Desestruturação
    const { nome, preco } = produtos[i]

    console.log(`Produto: ${nome} - R$${preco}`)
}
*/

/* 
// FOR IN - executa iterações a partir de um objeto e perocerre as propriedades.

let person = {
    name: 'Ricardo',
    surname: 'Lobo',
    email: 'ricardo@email.com'
}

for (let property in person){
    //Exibe o nome da propriedade
    console.log(property)

    //Exibe o conteúdo da propriedade
    console.log(person[property])
}

let students = ['Ricardo', 'Gabriela', 'Ethan']

for (let index in students) {
    //Exibir a posição do item no Array
    //console.log(index)

    //Exibe o index e o  item do Array
    console.log(`${index} - ${students[index]}`)
} */

/* 
// FOR OF - itera sobre valores de um objeto iterável (SOMENTE COM ARRAYS)

let students = ['Ricardo', 'Gabriela', 'Ethan']

for (let student of students) {
    console.log(student)
} */

/* 
// BREAK - encerra a execução da repetição ou switch para seguir a instrução seguinte

for (let i = 0; i < 10; i++){
    if (i === 5) {
        console.log('GAME OVER')
        break
    }
    console.log(i)
} */

// Continue encerra (pula) a execução das intruções na iteração e continua a execução do loop com a próxima iteração.

/* for (let i = 0; i < 10; i++){
    if (i === 5) {
        console.log('PULOU E RETORNOU AO COMEÇO DO LOOP')
        continue
    }
    console.log('i=', i)
} */ 

    //Tabuada completa
for(let n1 = 0; n1 <= 10; n1++){

    for(let n2 = 0; n2 <= 10; n2++){

        let total = n1 * n2

        // módulo % retorna o resto da divisão exata
        // Só os pares
        if(total % 2){
            continue
        }

        /* //Só os impares
        if(!(total % 2)){
            continue
        } */
        console.log(`${n1} * ${n2} = ${total}`)
    }
}