function shouldSleep(lateTime, tired, wakeUpEarly, lightOff) {
    return (lateTime && tired) || (wakeUpEarly && lightOff);
  }
  