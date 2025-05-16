def likes(names):
    # Determine the number of people who liked
    count = len(names)
    
    # Generate the appropriate message based on the count
    if count == 0:
        return "no one likes this"
    elif count == 1:
        return f"{names[0]} likes this"
    elif count == 2:
        return f"{names[0]} and {names[1]} like this"
    elif count == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {count - 2} others like this"

# Example usage:
print(likes([]))  # Output: "no one likes this"
print(likes(["Peter"]))  # Output: "Peter likes this"
print(likes(["Jacob", "Alex"]))  # Output: "Jacob and Alex like this"
print(likes(["Max", "John", "Mark"]))  # Output: "Max, John and Mark like this"
print(likes(["Alex", "Jacob", "Mark", "Max"]))  # Output: "Alex, Jacob and 2 others like this"