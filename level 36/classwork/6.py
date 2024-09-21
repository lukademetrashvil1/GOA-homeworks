def capitals(word):
    indices = []
    for index, char in enumerate(word):
        
        if char.isupper():
            indices.append(index)
    
    return indices