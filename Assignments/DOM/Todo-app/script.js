const taskInput = document.querySelector('#taskInput')  //input
const button = document.querySelector('#addButton')     //button
const ulList= document.querySelector('#taskList')       //ul

const totalTask = document.querySelector('#totalTasks')
const completedTasks = document.querySelector('#completedTasks')



function updateStats() {
    const allTasks = ulList.querySelectorAll('li');
    // const completed = ulList.querySelectorAll('li.completed');
    totalTask.textContent = allTasks.length;
    // completedTasks.textContent = completed.length;
  }


button.addEventListener('click', () => {
  
    const lis = document.createElement('li')
    lis.className = 'empty-list'
    lis.textContent = taskInput.value
    updateStats()

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.textContent = 'Delete'
    lis.appendChild(deleteButton)

    deleteButton.addEventListener('click', () => {
        lis.remove()
        updateStats()

    })
    
    document.querySelector('#taskInput').value = "";
    ulList.appendChild(lis)
})
updateStats()
