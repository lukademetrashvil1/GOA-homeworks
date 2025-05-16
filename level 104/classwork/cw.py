def valid_card(card):
    # Remove spaces from the card number
    card_number = card.replace(" ", "")
    
    # Convert string to list of integers
    digits = [int(d) for d in card_number]
    
    # Apply the Luhn algorithm
    total = 0
    # Start from the right (last digit is index -1)
    for i in range(len(digits) - 1, -1, -1):
        digit = digits[i]
        # Check if position is second-to-last, fourth-to-last, etc.
        if (len(digits) - i) % 2 == 0:
            digit *= 2
            if digit > 9:
                digit -= 9
        total += digit

    # If total modulo 10 is 0, it's valid
    return total % 10 == 0
