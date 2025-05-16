import math

def matrixfy(st):
    if len(st) == 0:
        return "name must be at least one letter"
    
    size = math.ceil(len(st) ** 0.5)
    st = st.ljust(size * size, '.')
    return [list(st[i:i+size]) for i in range(0, len(st), size)]
