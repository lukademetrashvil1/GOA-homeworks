def char_concat(word):
    # Check if the length of the word is odd, and if so, drop the central character
    if len(word) % 2 != 0:
        word = word[:len(word)//2] + word[len(word)//2 + 1:]
    
    result = []
    # Loop through the first half of the string
    for i in range(len(word) // 2):
        left_char = word[i]
        right_char = word[-(i + 1)]
        result.append(f"{left_char}{right_char}{i + 1}")
    
    return ''.join(result)

# Test cases
print(char_concat("abcdef"))   # Output: "af1be2cd3"
print(char_concat("abc!def"))  # Output: "af1be2cd3"
print(char_concat("abcdefg"))  # Output: "af1be2g"
