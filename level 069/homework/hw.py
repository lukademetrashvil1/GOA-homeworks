def domain_name(url):
    domain = ""
    i = 0
    
    # გადალახავს http:// ან https://
    if url[0:7] == "http://":
        i = 7
    elif url[0:8] == "https://":
        i = 8
    
    # გადალახავს www.
    if url[i:i+4] == "www.":
        i += 4
    
    # ვიძებთ დომენს.
    while i < len(url) and url[i] != ".":
        domain += url[i]
        i += 1
    
    return domain