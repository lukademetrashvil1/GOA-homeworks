function shouldWatchFootball(day, noOtherTasks, favoriteTeamPlaying) {
    return (day === "Saturday" || day === "Sunday") && (!noOtherTasks || favoriteTeamPlaying);
  }
  