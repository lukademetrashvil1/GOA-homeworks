for (;;) {
    // შემოსვლის მისაღებად
    let userInput = prompt("შეიყვანეთ ორი რიცხვი (ან 'exit' გამოსატანად):");

    if (userInput.toLowerCase() === 'exit') {
        alert("პროგრამა დასრულდა.");
        break;
    }

    // დავაგებთ შეყვანილი რიცხვები
    let numbers = userInput.split(' ');

    if (numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
        let num1 = parseFloat(numbers[0]);
        let num2 = parseFloat(numbers[1]);
        alert(`რიცხვების ${num1} და ${num2} ნამრავლია: ${num1 * num2}`);
    } else {
        alert("მიუწვდომელი შეყვანა! გთხოვთ, შეიყვანეთ ორი რიცხვი.");
    }
}
