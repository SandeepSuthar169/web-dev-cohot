const btns = document.querySelectorAll('#toggleButton')
const p_off = document.querySelector('#status')

const base = document.querySelector('.bulb-base')
const bulb = document.querySelector('#bulb')

btns.forEach(function (j){
    j.addEventListener('click', function(){
        if(bulb.style.backgroundColor === 'gray'){
            bulb.style.backgroundColor = 'orange' 
            j.textContent = 'Turn off'
            p_off.textContent = 'Status: ON'
        } else {
            bulb.style.backgroundColor = 'gray'
            j.textContent = 'Trun On'
            p_off.textContent = 'Status: Off'
        }
      
    })
})
