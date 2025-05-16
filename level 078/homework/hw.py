def two_sum(nums, target):
    # Create a dictionary to store numbers and their indices
    seen = {}
    
    # Iterate over the list
    for i, num in enumerate(nums):
        # Calculate the complement of the current number
        complement = target - num
        
        # If the complement is already in the dictionary, return the indices
        if complement in seen:
            return (seen[complement], i)
        
        # Otherwise, store the current number and its index
        seen[num] = i

# Example tests
print(two_sum([1, 2, 3], 4))  # Output: (0, 2) or (2, 0)
print(two_sum([3, 2, 4], 6))  # Output: (1, 2) or (2, 1)
