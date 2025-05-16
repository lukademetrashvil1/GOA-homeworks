def compare_numbers(num1, num2):
    result = (
        f"{num1} > {num2}" if num1 > num2 else
        f"{num2} > {num1}" if num2 > num1 else
        "Equal"
    )
    print(result)

# ტესტი
compare_numbers(5, 3)   # 5 > 3
compare_numbers(2, 8)   # 8 > 2
compare_numbers(4, 4)   # Equal
