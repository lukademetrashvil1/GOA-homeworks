function canPassTest(grade, reviewer) {
    // გადადიოდა თუ, ერთი მათგანი აკმაყოფილებს მოთხოვნებს
    return grade >= 60 || reviewer === "Passed";
  }
  