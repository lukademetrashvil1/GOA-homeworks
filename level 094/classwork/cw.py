numbers = [12, 24, 15, 18, 36, 40, 48, 50, 60]

divisible_by_12 = list(filter(lambda x: x % 12 == 0, numbers))

print(divisible_by_12)  # Output: [12, 24, 36, 48, 60]
