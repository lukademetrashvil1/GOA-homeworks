function points(games) {
    let totalPoints = 0;
    
    // Loop through each match result in the games array
    games.forEach(game => {
        // Split the score string into x (our team) and y (opponent's score)
        let [x, y] = game.split(":").map(Number);

        // Apply the rules based on the scores
        if (x > y) {
            totalPoints += 3; // Win
        } else if (x === y) {
            totalPoints += 1; // Tie
        }
        // No points are added for a loss (x < y)
    });
    
    return totalPoints;
}