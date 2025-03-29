def reverse_letter(st):
    # Step 1: Filter only alphabetic characters
    filtered_st = ''.join(char for char in st if char.isalpha())
    
    # Step 2: Reverse the filtered string
    reversed_st = filtered_st[::-1]
    
    # Step 3: Return the reversed string
    return reversed_st
