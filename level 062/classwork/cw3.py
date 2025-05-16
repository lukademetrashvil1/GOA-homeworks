def remove_elements(arr1, arr2):
    # ვაბრუნებთ arr1-ის ელემენტებს, რომლებიც არ არიან arr2-ში
    return [elem for elem in arr1 if elem not in arr2]

# მაგალითი
arr1 = [1, 2, 3, 4, 5]
arr2 = [2, 4]
filtered_arr = remove_elements(arr1, arr2)
print(filtered_arr)  # გამოსავალი: [1, 3, 5]
