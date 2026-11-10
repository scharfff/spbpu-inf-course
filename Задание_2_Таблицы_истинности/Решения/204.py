# F = 0
# 0 1 - - 
# 1 - 1 0
# - 1 1 0

print('w x y z')
for w in [0,1]:
    for x in [0,1]:
        for y in [0,1]:
            for z in [0,1]:
                F = ((x or y) <= z) or (y == w) or z
                if F == 0:
                    print(w,x,y,z)