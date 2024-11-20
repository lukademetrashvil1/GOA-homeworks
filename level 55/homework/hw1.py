# მომხმარებლისგან ორი რიცხვის შეყვანა
num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

# მომხმარებლისგან ოპერაციის არჩევა
operation = input("აირჩიეთ ოპერაცია (+ ან -): ")

# შედეგის გამოთვლა და გამოტანა
if operation == "+":
    result = num1 + num2
    print(f"{num1} + {num2} = {result}")
elif operation == "-":
    result = num1 - num2
    print(f"{num1} - {num2} = {result}")
else:
    print("არასწორი ოპერაცია!")
