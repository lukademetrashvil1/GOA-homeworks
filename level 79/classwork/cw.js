function isFlush(cards) {
    // აიღეთ პირველი ბარათის suit
    let suit = cards[0].slice(-1); // ბოლო სიმბოლო

    // ვამოწმებთ თუ ყველა ბარათი ერთსა და იმავე suitისაა
    if (cards.every(card => card.slice(-1) === suit)) {
        return true;
    } else {
        return false;
    }
}
