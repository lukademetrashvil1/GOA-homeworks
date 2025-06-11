import string

def is_pangram(sentence):
    sentence = sentence.lower()
    letters = set(filter(str.isalpha, sentence))
    return len(letters) == 26
