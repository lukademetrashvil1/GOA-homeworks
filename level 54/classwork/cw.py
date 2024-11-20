def print_non_zero_elements(arr=None):
    # თუ arr არ არის გადაცემული, დავაყენებთ მასივს როგორც ცარიელ სიას
    if arr is None:
        arr = []
    
    # მასივის გადაკვეთა და მხოლოდ 0-ს გარდა ყველა ელემენტის გამოყვანა
    for element in arr:
        if element != 0:
            print(element)

# ტესტირება
print("ტესტირება 1:")
print_non_zero_elements([1, 0, 3, 4, 0, 5])  # იქნება: 1, 3, 4, 5

print("\nტესტირება 2:")
print_non_zero_elements([0, 0, 0])  # არანაირი შედეგი

print("\nტესტირება 3:")
print_non_zero_elements()  # მასივის გარეშე, არანაირი შედეგი

