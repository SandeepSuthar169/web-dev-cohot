const InputBox = document.getElementById('input-box');
const ListContaine = document.getElementById('list-container');


function addTask(){
    if(InputBox.value === ''){
        alert("You must write somethind!");
    }else {
        let li = document.createElement('li');
        li.innerHTML = InputBox.value;
        ListContaine.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "x";
        li.appendChild(span)
    }
    InputBox.value = ''
    saveData()
}

ListContaine.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classLinst.toggle('checked')
        saveData()
    
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
},false);


function saveData(){
    localStorage.setItem('data', ListContaine.innerHTML);
}

function showTask(){
    ListContaine.innerHTML = localStorage.getItem('data');
}