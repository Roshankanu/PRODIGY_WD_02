let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCounter = 1;

function startStopwatch() {
    if (!timer) {
        timer = setInterval(updateStopwatch, 1000);
        document.querySelector('button:nth-child(1)').innerText = 'Pause';
    } else {
        clearInterval(timer);
        timer = null;
        document.querySelector('button:nth-child(1)').innerText = 'Resume';
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    timer = null;
    document.querySelector('button:nth-child(1)').innerText = 'Resume';
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCounter = 1;
    document.getElementById('display').innerText = '00:00:00';
    document.querySelector('button:nth-child(1)').innerText = 'Start';
    document.getElementById('lapList').innerHTML = '';
}

function lapTime() {
    const lapList = document.getElementById('lapList');
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCounter}: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    lapList.appendChild(lapItem);
    lapCounter++;
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}


function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
