let interval;
        let outputDiv = document.getElementById("output");
        let startBtn = document.getElementById("startBtn");
        let stopBtn = document.getElementById("stopBtn");

        startBtn.addEventListener("click", () => {
            startBtn.disabled = true;
            stopBtn.disabled = false;

            interval = setInterval(() => {
                let choice = document.querySelector('input[name="choice"]:checked');

                if (choice) {
                    if (choice.value === "number") {
                        outputDiv.textContent = getRandomNumber();
                    } else if (choice.value === "letter") {
                        outputDiv.textContent = getRandomLetter();
                    }
                }
            }, 1000);
        });

        stopBtn.addEventListener("click", () => {
            clearInterval(interval);
            startBtn.disabled = false;
            stopBtn.disabled = true;
        });

        function getRandomNumber() {
            return Math.floor(Math.random() * 100) + 1;
        }

        function getRandomLetter() {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const randomIndex = Math.floor(Math.random() * letters.length);
            return letters[randomIndex];
        }