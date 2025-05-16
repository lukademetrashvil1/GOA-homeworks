def stray(arr):
    unique_number = 0
    for number in arr:
        unique_number ^= number
    return unique_number