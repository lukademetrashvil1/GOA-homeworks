def billboard(name, price=30):
    total = 0
    for _ in name:
        total += price
    return total