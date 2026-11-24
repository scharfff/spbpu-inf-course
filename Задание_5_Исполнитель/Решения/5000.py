for N in range(1, 1000):
    b = bin(N)[2:]
    if b.count("1") % 2 == 0:
        b = b + "0"
        R = "10" + b[2:]
    else:
        b = b + "1"
        R = "11" + b[2:]
    R = int(R, 2)
    if R >= 16:
        print(N)
        break