//მომხმარებლისგან ორი რიცხვის შეყვანა
num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

// Get user input for two numbers
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Get the operation (+ or -) from the user
let operation = prompt("Choose an operation (+ or -):");

// Perform the operation and display the result
let result;

if (operation === "+") {
    result = num1 + num2;
    alert(`Result: ${num1} + ${num2} = ${result}`);
} else if (operation === "-") {
    result = num1 - num2;
    alert(`Result: ${num1} - ${num2} = ${result}`);
} else {
    alert("Invalid operation. Please choose either '+' or '-'.");
}
