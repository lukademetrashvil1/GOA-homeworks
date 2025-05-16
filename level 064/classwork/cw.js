function checkNumbers(num1, num2) {
    // შემოწმება: პირველი რიცხვი კენტია და მეტია მეორეზე, მეორე კი ლუწია
    if (num1 % 2 !== 0 && num1 > num2 && num2 % 2 === 0) {
      return true;
    }
    return false;
  }
  