
// Pegar o evento click
const checkBtn = document.querySelectorAll('.actions a.check')
const cancelBtn = document.querySelector('.cancel')
const deleteBtn = document.querySelectorAll('.delete')

const elementClicked = document.querySelector('.modal-wrapper').classList

// alterando modal para marcar como lido

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


// Revelar modal marcar como lido
addModal = event => {
    event.preventDefault()
    elementClicked.add('active')
    modalTitle.innerHTML = 'Marcar como lida'
    modalDescription.innerHTML = 'Deseja marcar como lida essa pergunta?'
    modalButton.innerHTML = 'Sim, marcar como lida'

    modalButton.classList.remove('red')
}
// Esconder modal
removeModal = event => {
    event.preventDefault()
    elementClicked.remove('active')
}

deleteModal = event => {
    event.preventDefault()
    elementClicked.add('active')
    modalTitle.innerHTML = 'Excluir pergunta'
    modalDescription.innerHTML = 'Tem certeza que voce deseja excluir essa pergunta?'
    modalButton.innerHTML = 'Sim, excluir'

    modalButton.classList.add('red')
}




// Event click
checkBtn.forEach( btn => {
    btn.addEventListener('click', addModal)
})

cancelBtn.addEventListener('click', removeModal)


deleteBtn.forEach( btn => {
    btn.addEventListener('click', deleteModal)
})
