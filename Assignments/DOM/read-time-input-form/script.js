const inputName = document.querySelector('#nameInput')
const displayName = document.querySelector('#nameDisplay')

const jobName =  document.querySelector('#jobInput')
const jobDisplay = document.querySelector('#jobDisplay')

const inputAge = document.querySelector('#ageInput')
const displayAge = document.querySelector('#ageDisplay')

const inputBIO = document.querySelector('#bioInput')
const displayBIO = document.querySelector('#bioDisplay')


inputName.addEventListener("input", function(){
    displayName.textContent = inputName.value ;
  });

jobName.addEventListener('input', function(){
    jobDisplay.textContent = jobName.value;
})

inputAge.addEventListener('input', function(){
    displayAge.textContent = inputAge.value;
})

inputBIO.addEventListener('input', function(){
    displayBIO.textContent = inputBIO.value;
})