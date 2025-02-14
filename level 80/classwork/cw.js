function sumOfDigitsWithoutConversion(number) {
    let sum = 0;

    // Loop until the number becomes 0
    while (number > 0) {
        sum += number % 10;  // Add the last digit to sum
        number = Math.floor(number / 10);  // Remove the last digit
    }

    return sum;
}

// Example usage
const number = 456;  // შეცვალეთ ეს თქვენი რიცხვისთვის
console.log(sumOfDigitsWithoutConversion(number));  // Output: 15 (4 + 5 + 6)
