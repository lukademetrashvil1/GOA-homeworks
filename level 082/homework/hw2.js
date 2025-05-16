const startButton = document.getElementById('startButton');
const timeInput = document.getElementById('timeInput');
const messageInput = document.getElementById('messageInput');
const messageDisplay = document.getElementById('messageDisplay');

startButton.addEventListener('click', () => {
    const time = parseInt(timeInput.value);  // დრო, რომელიც შეიყვანა მომხმარებელმა
    const message = messageInput.value;  // მესიჯი, რომელიც შეიყვანა მომხმარებელმა

    // თუ დრო და მესიჯი არ არის შეყვანილი, ჩაანაცვლე გაფრთხილებით
    if (isNaN(time) || time <= 0) {
        alert('გთხოვთ, შეიყვანოთ სწორი დრო!');
        return;
    }

    if (!message.trim()) {
        alert('გთხოვთ, შეიყვანოთ მესიჯი!');
        return;
    }

    // შენახეთ მესიჯი და დამალეთ ის თავდაპირველად
    messageDisplay.textContent = '';
    
    // განვახორციელოთ таймерი
    setTimeout(() => {
        messageDisplay.textContent = message;
    }, time);
});
