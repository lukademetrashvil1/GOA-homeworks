function canTakeItem(itemAvailable, allowedToTake, someoneWants) {
    return (itemAvailable && allowedToTake) || !someoneWants;
  }
  