const addTaskBTN = document.getElementById('add-task-btn')

const todoBoard = document.getElementById('todo-board')

addTaskBTN.addEventListener('click', function(){
    const input = prompt('What is the  Task')
    if(!input) return

    const taskCard = document.createElement('p')
    taskCard.classList.add('item')
    taskCard.setAttribute('draggable', true)
    taskCard.innerText = input

    taskCard.addEventListener('dragstart', () => {
        taskCard.classList.add('flying')
    })
    taskCard.addEventListener('dragend', () => {
        taskCard.classList.remove('flying')
    })


    todoBoard.appendChild(taskCard)

})


// const allBoards = document.getElementsByClassName('board')
const allItems = document.querySelectorAll('.item')
const allBoards = document.querySelectorAll('.board')




allItems.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('flying')
    })
    item.addEventListener('dragend', () => {
        item.classList.remove('flying')
    })
})

allBoards.forEach((board) => 
    board.addEventListener('dragover', () => {
        const flyingElement = document.querySelector('.flying')
        console.log(board, 'fshjfshjfsfsjkfsdhjfsd', flyingElement);
        board.appendChild(flyingElement)
    })
)