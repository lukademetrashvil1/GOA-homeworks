def manual_filter(arr, *elements_to_remove):
    # შევქმნათ ახალი მასივი, სადაც არ იქნება მითითებული ელემენტები
    filtered_arr = [elem for elem in arr if elem not in elements_to_remove]
    return filtered_arr

# მაგალითი
original_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
elements_to_remove = [3, 5, 7]
filtered_list = manual_filter(original_list, *elements_to_remove)
print(filtered_list)  # გამოსავალი: [1, 2, 4, 6, 8, 9]
