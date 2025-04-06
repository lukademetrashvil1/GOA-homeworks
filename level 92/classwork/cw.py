# მომხმარებლისგან რიცხვის მიღება
number = int(input("შეიყვანეთ რიცხვი: "))

# ტერნარული ოპერატორი: თუ რიცხვი არის 2-ის ჯერადი - "Two", თუ სამის - "Three"
result = "Two" if number % 2 == 0 else "Three" if number % 3 == 0 else "Neither"
print(result)
