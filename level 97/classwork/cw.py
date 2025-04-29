def is_vow(inp):
    return [chr(i) if chr(i) in 'aeiou' else i for i in inp]