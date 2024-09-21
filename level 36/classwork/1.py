def sum_two_smallest_numbers(numbers):
    #your code here
    if len(numbers) < 4:
        raise ValueError("Array must contain at least 4 positive integers.")
    
    # Sort the array
    sorted_numbers= sorted(numbers)
    
    # Return the sum of the first two elements
    return sorted_numbers[0] + sorted_numbers[1]