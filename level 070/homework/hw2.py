def print_matrix_details(matrix):
    n = len(matrix)
    
    # 1) სვეტები
    print("Columns:")
    for j in range(n):
        print([matrix[i][j] for i in range(n)])
    
    # 2) რიგები
    print("\nRows:")
    for i in range(n):
        print(matrix[i])
    
    # 3) დიაგონალები
    print("\nDiagonals:")
    main_diag = [matrix[i][i] for i in range(n)]
    anti_diag = [matrix[i][n - i - 1] for i in range(n)]
    print(f"Main diagonal: {main_diag}")
    print(f"Anti diagonal: {anti_diag}")

# მაგალითი
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print_matrix_details(matrix)
