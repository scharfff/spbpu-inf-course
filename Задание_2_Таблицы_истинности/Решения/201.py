
# F = 0
# - - - - 
# - 0 1 0 
# 0 - - 0 
# - 1 1 - 

print('w x y z')
for w in [0,1]:
    for x in [0,1]:
        for y in [0,1]:
            for z in [0,1]:
                F = ((z <= x) <= (x == y) or (not w))
                if F == 0:
                    print(w,x,y,z)
# - - - - 
# - 0 1 0 
# 0 - - 0 
# - 1 1 - 

'''
w x y z
1 0 1 0
1 1 0 0
1 1 0 1
'''
