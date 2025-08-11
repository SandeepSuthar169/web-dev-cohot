function nowTime(){

    const time = document.getElementById('time')
    const today = document.getElementById('date')
    
    
    const now  = new Date()
    const hour = now.getHours() % 12 || 12
    const minutes =now.getMinutes()
    const seconds = now.getSeconds()

    let day = now.getDate();
    let month = now.getMonth() + 1
    let year = now.getFullYear(); 
    
    let formattedDate = `${day}/${month}/${year}`;
    
    console.log(formattedDate);
    
    
    time.textContent = `${hour}:${minutes}:${seconds}`
    today.textContent = `${day} - ${month} - ${year}`
}


setInterval(nowTime, 1000);
nowTime()