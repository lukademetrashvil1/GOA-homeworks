import math

def count_area(*args):
    # მართკუთხედის ფართობის გამოთვლა
    if len(args) == 2:
        length, width = args
        return length * width
    
    # წრის ფართობის გამოთვლა
    elif len(args) == 1:
        radius = args[0]
        return math.pi * radius ** 2
    
    # სამკუთხედის ფართობის გამოთვლა ჰერონის ფორმულით
    elif len(args) == 3:
        a, b, c = args
        # ჰერონის ფორმულა
        s = (a + b + c) / 2  # ნახევარი პერიმეტრი
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))  # ფართობი
        return area
    
    # სხვა შემთხვევები, როდესაც არასწორი რაოდენობის არგუმენტები არის მოცემული
    else:
        raise ValueError("არასწორი რაოდენობის არგუმენტები")

# ტესტირება
print(count_area(5, 10))    # მართკუთხედის ფართობი
print(count_area(7))        # წრის ფართობი
print(count_area(3, 4, 5))  # სამკუთხედის ფართობი
