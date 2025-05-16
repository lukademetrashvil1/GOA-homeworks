function sumOfDigits(number) {
    return number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Example usage
const number = 456; // Change this to any 3-digit number
console.log(sumOfDigits(number));  // Output: 15 (4 + 5 + 6)
