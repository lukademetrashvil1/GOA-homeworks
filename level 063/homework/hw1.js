function rockPaperScissors(player1, player2) {
    // ფუნქცია განსაზღვრავს, რომელი მოძრაობა ეყოლება ძლიერი
    if (player1 === player2) {
      return "დაიწყო დათანხმება (tie)"; // თუ ორივე იგივე არჩევანია
    }
  
    // განსაზღვრა გამარჯვების შაბლონი
    if (
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "scissors" && player2 === "paper") ||
      (player1 === "paper" && player2 === "rock")
    ) {
      return "მოთამაშე 1 გაიმარჯვა!";
    } else {
      return "მოთამაშე 2 გაიმარჯვა!";
    }
  }
  