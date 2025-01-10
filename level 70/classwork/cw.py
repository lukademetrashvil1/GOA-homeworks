def domain_name(url):
    
    if url[:7] == "http://":
        url = url[7:]
    elif url[:8] == "https://":
        url = url[8:]

    if url[:4] == "www.":
        url = url[4:]
    

    domain = ''
    for char in url:
        if char == '.':
            break
        domain += char

    return domain