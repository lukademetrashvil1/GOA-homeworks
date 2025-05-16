def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    lst.remove(max1)  # პირველ უმაღლეს რიცხვს ამოშლი
    max2 = max(lst)  # ახლა მოიძიე მეორე მაქსიმალური

    return max1 + max2

print(sum_two_largest([3, 7, 2, 9, 5]))  # მოსალოდნელი შედეგი: 16 (9 + 7)
print(sum_two_largest([10, 10, 5, 3]))   # მოსალოდნელი შედეგი: 20 (10 + 10)
