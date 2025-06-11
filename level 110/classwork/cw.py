def get_issuer(number):
    num_str = str(number)
    length = len(num_str)

    if length == 15 and (num_str.startswith('34') or num_str.startswith('37')):
        return "AMEX"
    elif length == 16 and num_str.startswith('6011'):
        return "Discover"
    elif length == 16 and num_str[:2] in ['51', '52', '53', '54', '55']:
        return "Mastercard"
    elif length in [13, 16] and num_str.startswith('4'):
        return "VISA"
    else:
        return "Unknown"
