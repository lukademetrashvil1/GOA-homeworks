def min_max(lst):
    return [min(lst), max(lst)]
#2
def sum_mix(arr):
    return sum(int(x) for x in arr)
#3
def number(lines):
    return [f"{i + 1}: {line}" for i, line in enumerate(lines)]