function canGoOutside(weather, timeLeft, ready) {
    return (weather === "Good" || timeLeft > 30) && ready;
  }
  