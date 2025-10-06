//fields
const form = document.getElementById('form')
const newItem = document.getElementById('newItem')
const listItems = document.getElementById('listItems')
const alertDanger = document.getElementById('alertDanger')
const closeAlert = document.getElementById('closeAlert')

//Variavel para pegar os novos itens adicionados a lista
let item = ''
//Variavel para incrementar numeração do name, id e for dos items
let increment = 0
//Variavel para pegar o item a ser excluído
let trashItem = ''

form.addEventListener('submit',function(event){
    event.preventDefault()
    //Pegando valor do campo
    item = newItem.value

    if(item === ''){
        alert('Preencha o campo para adicionar um item a lista!')
    } else {
        addItem()
    }
})

// Função par adicionar mais um item a lista
function addItem(){
    //Incrementa a numeração do name, id e for
    increment ++

    // Variavel que armazena a li para um novo item a ser criado
    const newListItemHTML = 
        `<li class="checkbox-inner" id="listItem-${increment}">
            <input type="checkbox" name="item-${increment}" id="item-${increment}">
            <label for="item-${increment}">${item}</label>
            <button type="button" class="btn-trash">
                <img src="./assets/icons/trash.svg" alt="ícone de lixeira">
            </button>
        </li>`
        
    // Insere o item no final do HTML, sem fazer com que ele atualize por inteiro
    // 'beforeend' => insira dentro do elemento, no final
    listItems.insertAdjacentHTML('beforeend', newListItemHTML)

    // Limpa o campo adicione novo item após adicionar um novo item
    newItem.value = ''
    //Remove o alerta de item removido, caso exista, ao colocar um novo item
    alertDanger.classList.remove('show-danger')
}

// Pegando a li para fazer a exclusão do item
//Ouvindo qualquer click que exista dentro da ul
listItems.addEventListener('click', function(event){
    //Verificando se o click veio do botão de excluir o item
    if (event.target.closest('.btn-trash')) {
            //Atribuindo o evento de click do target e indo para o li pai dele
            //closest vai para o elemento pai ('li')
            trashItem = event.target.closest('li')

            // chamando função de deletar o item da lista
            deleteItem()
        } 
})
// função que deleta o item
function deleteItem(){
    console.log('Excluindo Item: ',trashItem)

    //remove o item
    trashItem.remove()

    //Mostrar o alerta que foi removido um item da lista
    alertDanger.classList.add('show-danger')
}

// Fecha o alerta pelo botão de fechar no alerta
closeAlert.addEventListener('click', function(event){
    alertDanger.classList.remove('show-danger')
})