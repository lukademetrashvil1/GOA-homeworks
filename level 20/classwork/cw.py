def greet():#defit vadzlevt funqcias saxels da tviton funqcia aris hello luka
    print('hello luka')
greet()
def add():
    print(5+4)
add()    

def add(num1,num2,operation):
    result=0
    if operation == "+":
        result=num1+num2
    elif operation =="-":
        result=num1-num2
    elif operation =="*":
        result =num1*num2    
    elif operation =="/":
        result=num1/num2
    else:
        result='not number'
    return result    
    
print(add(3,5,'+'))
    