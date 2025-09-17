//Funçṍes
function hello(){
    console.log('Hello function!')
}

hello()

/*
 -- Funções com parametros
 - Parâmetro: é a varivel (escopo da função) que irá receber um valor de uma função
 - Argumentos: é o valor que é passado para funç~ao
*/

console.log("### FUNÇÕES COM PARÂMETROS ###")
//Passando o parâmetro username
function message(username){
    console.log('Olá,', username)
}
//Passando Argumentos
message('Ricardo')
message('Gabriela')

function sumN(v1, v2){
    console.log('Result:', v1 + v2)
}
sumN(1, 3)
sumN(5, 4)

//Definindo um valor (Argumento) padrão
function joinText(text1, text2 = "", text3 = ""){
    console.log(text1, text2, text3)
}
joinText("Ricardo", "Carneiro", "Lobo")
joinText("Ricardo", "Lobo")
joinText("Ricardo")

//Funções com retorno
console.log("### FUNÇÕES COM RETORNO ###")
function sumN2(v1, v2){
    return v1 + v2
}

let res1 = sumN2(7, 3)
console.log('Result:', res1)

//Escopo de Função
showMessage("Olá, Ricardo!")

function showMessage(message){
    console.log(message)
    endLine()

    function endLine(){
        console.log("---------")
    }
}
showMessage("Tudo bem?")
//Não existe nesse escopo
//endLine()

/*
    Comentário de documentação em JS (sintaxe de JSDoc)
    O JSDoc e um padrão para incorporar documentação no código-fonte a partir desses comentários
*/
/**
 * Authenticates the user
 * 
 * @param {String} email user email
 * @param {String} password more then 6 characters
 * @returns {Number} user id
 */
function signIn(email, password){
    //Fluxo de autenticação de user

    return 7
}

signIn("ricardo@email.com", "12345678")


// Função anônima (função que não possui nome)
console.log("### FUNÇÕES ANÔNIMAS ###")
const showMessage1 = function(){
    return "Olá, Ricardo!"
}

console.log(showMessage1())

const showMessage2 = function(name){
    return "Olá, " + name
}

console.log(showMessage2("Gabriela!"))

// Arrow Function (função de seta)
const showMessage3 = () =>{
    console.log("Olá!")
}

console.log(showMessage3)
showMessage3()

const showMessage4 = (username, email) =>{
    console.log("Olá, ", username, ". Seu e-mail é: ", email)
}

showMessage4("Ricardo", "ricardo@email.com")

// CALLBACK FUNCTION : é uma função passa para outra função como um argumento
console.log("### CALLBACK FUNCTION ###")

function execute(taskName, callback){
    console.log('Executando a tarefa: ', taskName)

    callback()
}

function callbackOK(){
    console.log('Tarefa finalizada')
}

//Passando para a função
execute('Download do arquivo ....', callbackOK)

//Criando a função no próprio parâmetro (Função anônima)
execute('Upload do arquivo ....', function(){
    console.log('Função de callback com uma função anônima.')
})

//Utilizando Arrow Function
execute('Excluindo arquivo ....', () => {
    console.log('Arquivo excluido (Com arrow function)')
})

//Quando for apenas uma instrução
execute('Salvando arquivo ...', () => console.log('Arquivo salvo!'))


