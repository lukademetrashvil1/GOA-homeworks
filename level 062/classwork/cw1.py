def bubble_sort(arr):
    n = len(arr)
    # თითოეული ელემენტი უნდა იყოს შედარებული
    for i in range(n):
        # ვასრულებთ ერთი პასის დროს
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

# მაგალითი
unsorted_list = [64, 34, 25, 12, 22, 11, 90]
sorted_list = bubble_sort(unsorted_list)
print(sorted_list)  # გამოსავალი: [11, 12, 22, 25, 34, 64, 90]
