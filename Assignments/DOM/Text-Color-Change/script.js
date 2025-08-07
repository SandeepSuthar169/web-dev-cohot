const body = document.querySelector('body')
const h1_main = document.querySelector('#mainHeading')
const p = document.querySelector('p')

document.getElementById('redButton').addEventListener('click', function(){
    body.style.backgroundColor = 'red'
    h1_main.style.color = 'white'
    p.style.color = 'white'

})


document.getElementById('greenButton').addEventListener('click', function(){
    body.style.backgroundColor = 'green'
    h1_main.style.color = 'white'
    p.style.color = 'white'
})


document.getElementById('blueButton').addEventListener('click', function(){
    body.style.backgroundColor = 'blue'
    h1_main.style.color = 'white'
    p.style.color = 'white'
})


document.getElementById('purpleButton').addEventListener('click', function(){
    body.style.backgroundColor = 'purple'
    h1_main.style.color = 'white'
    p.style.color = 'white'
})


document.getElementById('reset').addEventListener('click', function(){
    body.style.backgroundColor = 'white'
    h1_main.style.color = 'black'
    p.style.color = 'black'
})