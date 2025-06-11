def largest_power(N):
    k = 0
    while 3 ** (k + 1) < N:
        k += 1
    return k
