//1
function getInput() {
    let previousInput = "";  // იწყება ცარიელი მნიშვნელობით
    while (true) {
        let userInput = prompt("შეიყვანეთ ტექსტი:");

        if (userInput === previousInput) {
            alert("თქვენ უკვე შეიყვანეთ ეს ტექსტი, სცადეთ სხვა.");
        } else {
            alert("მიღებული ტექსტი: " + userInput);
            previousInput = userInput;
            break;  // როდესაც ახალი ტექსტი შეყვანილია, წყვეტს ციკლს
        }
    }
}

getInput();
//2
function roundToNextZero() {
    let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
    
    while (true) {
        let strNumber = number.toString();
        
        if (strNumber.endsWith("0")) {
            alert("მოზარდი რიცხვი: " + number);
            break;
        } else {
            number += 1;
        }
    }
}

roundToNextZero();
//3
function checkPassword() {
    const correctPassword = "12348765";
    
    while (true) {
        let password = prompt("გთხოვთ, შეიყვანეთ პაროლი:");

        if (password === correctPassword) {
            alert("პაროლი სწორია!");
            break;
        } else {
            alert("პაროლი არასწორია, სცადეთ ისევ.");
        }
    }
}

checkPassword();
