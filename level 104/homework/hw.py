def height(n):
    base_height = 2000000
    r = 1 / 2.5
    total_ratio = (1 - r**n) / (1 - r)
    total_height = base_height * total_ratio
    return round(total_height, 3)
