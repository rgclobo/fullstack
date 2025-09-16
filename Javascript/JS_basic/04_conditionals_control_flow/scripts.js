//Condicionais e controle de fluxo
//Estrutura de condição

//Operador condicional ternário - Por ter três etapas
let age = 21
console.log(
    age >= 18 // Condição
    ? "Você pode dirigir!" // Se verdadeiro
    : "Você não pode dirigir!" // Se falso
)

// Falsy e Truthy
console.log("### EXEMPLOS DE FALSY ###")
console.log("1 -", false ? "VERDADEIRO" : "FALSO")
console.log("2 -", 0 ? "VERDADEIRO" : "FALSO")
console.log("3 -", -0 ? "VERDADEIRO" : "FALSO")
console.log("4 -", "" ? "VERDADEIRO" : "FALSO")
console.log("5 -", null ? "VERDADEIRO" : "FALSO")
console.log("6 -", undefined ? "VERDADEIRO" : "FALSO")
console.log("7 -", NaN ? "VERDADEIRO" : "FALSO")

console.log("### EXEMPLOS DE TRUTHY ###")
console.log("8 -", true ? "VERDADEIRO" : "FALSO")
console.log("9 -", {} ? "VERDADEIRO" : "FALSO")
console.log("10 -", [] ? "VERDADEIRO" : "FALSO")
console.log("11 -", 1 ? "VERDADEIRO" : "FALSO")
console.log("12 -", 3.23 ? "VERDADEIRO" : "FALSO")
console.log("13 -", "0" ? "VERDADEIRO" : "FALSO")
console.log("14 -", " " ? "VERDADEIRO" : "FALSO")
console.log("15 -", "Ricardo" ? "VERDADEIRO" : "FALSO")
console.log("16 -", "false" ? "VERDADEIRO" : "FALSO")
console.log("17 -", -1 ? "VERDADEIRO" : "FALSO")
console.log("18 -", Infinity ? "VERDADEIRO" : "FALSO")
console.log("19 -", -Infinity ? "VERDADEIRO" : "FALSO")

//IF (SE)
let hour = 11
console.log("### EXEMPLOS DE IF(){} ###")
if (hour <= 12){
    console.log("Bom dia!")
    console.log("Seja bem vindo!")
}

//IF ELSE (SE NÃO)
let age2 = 23
console.log("### EXEMPLOS DE IF ELSE(){} ###")
if (age2 < 18){
    console.log("Você não pode dirigir!")
} else {
    console.log("Você pode dirigir!")
}

// IF ELSE IF ()
let hour2 = 19
console.log("### EXEMPLOS DE IF ELSE IF(){} ###")
/*if(hour2 <= 12){
    console.log("Bom dia!")
} else if(hour2 > 18){
    console.log("Boa noite!")
} else if(hour2 > 12){
    console.log("Boa tarde!")
}*/
/*if(hour2 <= 12){
    console.log("Bom dia!")
} else if(hour2 > 12 && hour2 <= 18){
    console.log("Boa tarde!")
} else{
    console.log("Boa noite!")
}*/

if(hour2 <= 12){
    console.log("Bom dia!")
} else if(hour2 > 18){
    console.log("Boa noite!")
} else {
    console.log("Boa tarde!")
}

//SWITCH CASE
let option = 3
console.log("### EXEMPLOS DE SWITCH CASE ###")
switch (option){
    case 1:
        console.log("Consultar pedido.")
        console.log("Aguarde ....")
        break
    case 2:
        console.log("Falar com atendente.")
        break
    case 3:
        console.log("Cancelar pedido.")
        break
    default:
        console.log("Opção inválida.")
}

//TRY / CATCH / FINALY(TRATAMENTO DE EXCEÇÕES)
console.log("### EXEMPLOS DE TRY / CATCH / FINALY ###")
/*try{
    //TENTA executar algo
    console.log(result)
} catch (error){
    //CAPTURA o erro para tratar
    console.log("Deu erro na solicitação: ", error)
} finally{
    console.log("Fim!")
}*/
let result = 1
try{
    if(result === 0){
        throw new Error("O valor é igual a zero.")
    }
} catch (error){
    console.log(error)
} finally{
    console.log("Fim.")
}





