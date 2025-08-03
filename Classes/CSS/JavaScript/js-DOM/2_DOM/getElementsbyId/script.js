const addbtn = document.getElementById('add_btn');
const todoInput = document.getElementById('todo_input')

const todoitemscontainer = document.getElementById('todo-items-container')


addbtn.addEventListener('click', () => {
    const value = todoInput.value;
    // console.log('User entered', value);
    
    const li = document.createElement('li');
    li.innerText = value;

    const delButton = document.createElement('button');
    delButton.innerText = 'X';
    li.appendChild(delButton)


    delButton.addEventListener('click', function(){
        li.remove();
    });
    
    // console.log(li);
    todoitemscontainer.appendChild(li);
    todoInput.value = '';
})