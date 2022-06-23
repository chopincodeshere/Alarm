showTime();

var audio = new Audio('Kalimba.mp3');
function ringLaser() {
    audio.play();
}

const button = document.getElementById('btn-1');
button.addEventListener('click', function(e) {
    e.preventDefault();

    const alarm = document.getElementById('Time');
    
    let now = new Date();
    let alarmDate = new Date(alarm.value);
    let timeToAlarm = alarmDate - now;

    if(timeToAlarm >= 0) {
        setTimeout(() => {
            ringLaser()
        }, timeToAlarm);
    }
    alarm.value = null;
});

function showTime() {
    let timeGMT = document.getElementById('box-1');
    let html = '';

    let nowTime = new Date();

    html += `${nowTime.getHours()}:${nowTime.getMinutes()}:${nowTime.getSeconds()}`;

    timeGMT.innerHTML = html;

    let time = setTimeout(() => {
        showTime();        
    }, 500);
}
