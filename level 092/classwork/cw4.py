import random

def getRandomElement(arr):
    # შემთხვევითი ელემენტის არჩევა მასივიდან
    return random.choice(arr)

# ფუნქციის გამოცდა
my_list = [1, 2, 3, 4, 5, 6, 7]
print(getRandomElement(my_list))  # შემთხვევითი ელემენტი გამოტანილა
