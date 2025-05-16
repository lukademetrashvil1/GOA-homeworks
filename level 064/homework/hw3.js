function canTakeStep(barrier, spaceAvailable, signal) {
    return !barrier && (spaceAvailable || signal === "Green");
  }
  