def set_alarm(employed, vacation):
    if employed and not vacation:
        return True
    return False