#1
def even_list(number_list):
    res_list = []

    for num in number_list:
        if num%2 == 0:
            res_list.append(num)

    return res_list

print(even_list([2,32,21,35,5432,6,865,43,24,4224]))

#2
def string_func(string_list):
    res_list = []

    for string in string_list:
        if len(string) <= 4:
            res_list.append(string)

    return res_list

print(string_func(["SADDAS","SASAdacc","dasdasdsdsd",'vvvvv','dsfd','qwewqeweqwewewqew','dddd','xd','haha']))

#3
def inter_list(fulllist):
    inter_nums =[]
    for num in fulllist:
        if num ==int(num):
            inter_nums.append(num)
        return inter_nums
fulllist=[2,3.2,21.34,2.3434]
print(inter_list(fulllist))        