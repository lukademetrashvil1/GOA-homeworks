def unique_elements(arr):
    # ვაკეთებთ ელემენტების ცხრილს მათი რაოდენობის შესამოწმებლად
    element_count = {}
    
    # ვ遍რტავთ მასივს და ვანგარიშობთ თითოეული ელემენტის რაოდენობას
    for element in arr:
        if element in element_count:
            element_count[element] += 1
        else:
            element_count[element] = 1
    
    # ფილტრავს მხოლოდ ის ელემენტები, რომლებიც ერთხელ გვხვდება
    return [element for element, count in element_count.items() if count == 1]
