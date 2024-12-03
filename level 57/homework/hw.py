def string_to_array(s):
    result = []
    word = ''
    for char in s:
        if char == ' ':
    
                result.append(word)
                word = ''
        else:
            word += char
    result.append(word)
    return result 