function determineWinner(player1Stats, player2Stats) {
    // Player 1 stats
    let player1Strength = player1Stats[0]; // ძალა
    let player1Speed = player1Stats[1]; // სისწრაფე
    let player1Intelligence = player1Stats[2]; // ინტელიგენტი
    
    // Player 2 stats
    let player2Strength = player2Stats[0]; // ძალა
    let player2Speed = player2Stats[1]; // სისწრაფე
    let player2Intelligence = player2Stats[2]; // ინტელიგენტი
  
    // Calculating scores
    let player1Score = player1Strength * 1 + player1Speed * 2 + (player1Strength + player1Speed) * player1Intelligence / 10;
    let player2Score = player2Strength * 1 + player2Speed * 2 + (player2Strength + player2Speed) * player2Intelligence / 10;
  
    // Determine the winner based on the calculated scores
    if (player1Score > player2Score) {
      return "მოთამაშე 1 გაიმარჯვა!";
    } else if (player2Score > player1Score) {
      return "მოთამაშე 2 გაიმარჯვა!";
    } else {
      return "დაიწყო დათანხმება (tie)"; // თუ ქულები თანაბარია
    }
  }
  