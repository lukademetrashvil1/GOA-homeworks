import _compression as np

def get_matrix(n):
    if n < 0:
        return "Size must be greater than or equal to 0."
    return np.eye(n).astype(int).tolist()

# Example usage:
print(get_matrix(1))  # Identity matrix of size 1
print(get_matrix(2))  # Identity matrix of size 2
print(get_matrix(5))  # Identity matrix of size 5
