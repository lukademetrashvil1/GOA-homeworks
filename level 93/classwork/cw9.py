from functools import reduce

numbers = [3, 7, 10, 5]

total = reduce(lambda x, y: x + y, numbers)

print("ჯამი არის:", total)  # Output: 25
