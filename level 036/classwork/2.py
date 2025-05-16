def remove_smallest(numbers):
    if not numbers:
        return []
    
    # Find the index of the minimum numbers
    min_numbers = min(numbers)
    min_index = numbers.index(min_numbers)
    
    # Create a new list without the element at min_index
    return [numbers for i, numbers in enumerate(numbers) if i != min_index]