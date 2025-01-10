def func(n, m):
    matrix = [[0] * m for _ in range(n)]  # პირველადი მატრიცა n x m ზომის
    num = 1  # დაწყების რიცხვი
    
    # თითოეული სვეტისთვის
    for j in range(m):
        for i in range(n):
            matrix[i][j] = num
            num += 1
    
    return matrix

# მაგალითი
print(func(2, 2))
