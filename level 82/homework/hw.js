let timer;
let timeLeft;
let counter = 1;

const startStopButton = document.getElementById('startStopButton');
const timeInput = document.getElementById('timeInput');
const counterDisplay = document.getElementById('counterDisplay');
const messageDisplay = document.getElementById('message');

let isRunning = false;

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

function startTimer() {
    const inputTime = parseInt(timeInput.value);
    if (isNaN(inputTime) || inputTime <= 0 || inputTime > 10000) {
        alert('გთხოვთ, შეიყვანოთ სწორი დრო (0-დან 10000-მდე)');
        return;
    }

    timeLeft = inputTime;
    counter = 1;
    isRunning = true;
    startStopButton.textContent = 'Stop';
    messageDisplay.textContent = '';
    counterDisplay.textContent = '';

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            messageDisplay.textContent = "Time's up";
            isRunning = false;
            startStopButton.textContent = 'Start';
        } else {
            counterDisplay.textContent = counter;
            counter++;
            timeLeft--;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    messageDisplay.textContent = "Timer stopped!";
    isRunning = false;
    startStopButton.textContent = 'Start';
}
