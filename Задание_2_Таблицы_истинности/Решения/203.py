# F = 0
# - - - -
# - 1 1 -
# 0 - - 0
# 0 0 1 - 
print('w x y z')
for w in [0,1]:
    for x in [0,1]:
        for y in [0,1]:
            for z in [0,1]:
                F = ((x == (not y)) <= (not (w <= x)) or (not z))
                if F == 0:
                    print(w,x,y,z)  