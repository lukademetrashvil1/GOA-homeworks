def calculator(x, y, op):
    # Check if x and y are numbers and the operator is valid
    if isinstance(x, (int, float)) and isinstance(y, (int, float)):
        # Perform the corresponding operation based on the operator
        if op == "+":
            return x + y
        elif op == "-":
            return x - y
        elif op == "*":
            return x * y
        elif op == "/":
            if y == 0:
                return "Cannot divide by zero"
            return x / y
        else:
            return "unknown value"
    else:
        return "unknown value"

# Test cases to check the function
print(calculator(1, 2, "+"))  # Output: 3
print(calculator(1, 2, "&"))  # Output: unknown value
print(calculator(1, "k", "*"))  # Output: unknown value
