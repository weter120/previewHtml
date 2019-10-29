const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // const amPm = hour >= 12 ? 'PM' : 'AM';
    console.log('tipe')

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}

function addZero(n){
    return (parseInt(n,10)<10 ? '0':'') + n;
}

function setBgGreet(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = "Доброе Утро";
    } else if (hour < 18){
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = "Добрый День";
    } else {
        document.body.style.background = "url('./img/evening.jpg')";   
        greeting.textContent = "Добрый Вечер";
        document.body.style.color = 'white';
    }
}

showTime();
setBgGreet();