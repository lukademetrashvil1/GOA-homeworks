def cat_mouse(x):
    
    cat_position = x.index('C')
    mouse_position = x.index('m')
    
    distance = mouse_position - cat_position
    
    if distance <= 4:
        return "Caught!"
    else:
        return "Escaped!"