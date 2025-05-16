# მომხმარებლისგან სტრინგის და ორი ინდექსის მიღება
text = input("გთხოვთ, შეიტანოთ სტრინგი: ")
start = int(input("შეიყვანეთ დამწყები ინდექსი: "))
end = int(input("შეიყვანეთ დასრულების ინდექსი: "))

# slicing-ის გამოყენება
sliced_text = text[start:end]
print("სტრინგი შემდეგი ინდექსებიდან:", sliced_text)

# სიტყვების შემოტრიალება
reversed_sentence = ' '.join(text.split()[::-1])
print("შემოტრიალებული სიტყვები:", reversed_sentence)
