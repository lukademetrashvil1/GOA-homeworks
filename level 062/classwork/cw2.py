def get_difference(arr1, arr2):
    # ვაბრუნებთ იმ ელემენტებს, რომლებიც არ არიან ორივე მასივში
    return [elem for elem in arr1 if elem not in arr2] + [elem for elem in arr2 if elem not in arr1]

# მაგალითი
arr1 = [1, 2, 3, 4, 5]
arr2 = [4, 5, 6, 7, 8]
difference = get_difference(arr1, arr2)
print(difference)  # გამოსავალი: [1, 2, 3, 6, 7, 8]
