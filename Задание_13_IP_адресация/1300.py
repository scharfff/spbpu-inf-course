i = 0
for k in range(128,144):
    s = bin(192)+ bin(168) + bin(40) + bin(k)
    if s.count("1") % 2 != 0:
        i += 1
print(i)