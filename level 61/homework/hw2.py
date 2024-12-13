def manual_sort(arr):
    # სორტირება შერჩევის მეთოდით (Selection Sort)
    n = len(arr)
    for i in range(n):
        # ვეძებთ მინიმუმ ელემენტს დარჩენილი ნაწილში
        min_index = i
        for j in range(i+1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        # ვცვლით მინიმუმ ელემენტს ადგილობრივ ელემენტთან
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

# მაგალითი
unsorted_list = [64, 25, 12, 22, 11]
sorted_list = manual_sort(unsorted_list)
print(sorted_list)  # გამოსავალი: [11, 12, 22, 25, 64]
