function shouldStayHome(weather, plansOutside) {
    return (weather === "Rainy" || weather === "Snowy") && !plansOutside;
  }
  