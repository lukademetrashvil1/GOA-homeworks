def cube_odd(arr):
    if not all(isinstance(x, int) and not isinstance(x, bool) for x in arr):
        return None
    
    return sum(x**3 for x in arr if x**3 % 2 != 0)
