def reverse_words(text):
    words = text.split(' ')  # Split the string by spaces
    reversed_words = [word[::-1] for word in words]  # Reverse each word
    return ' '.join(reversed_words)  # Join the reversed words back with spaces