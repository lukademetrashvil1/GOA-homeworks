listn = [1, 3, 5, 6, 7, 10, 15, 21, 25.5, 30, 101, 105]

multiples_of_5 = list(filter(lambda x: x % 5 == 0, listn))

print(multiples_of_5)  # Output: [5, 10, 15, 30, 105]
