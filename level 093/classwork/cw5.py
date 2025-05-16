numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10]
divisible_by_3 = list(filter(lambda x: x % 3 == 0, numbers))
print(divisible_by_3)  # [3, 6, 9]
