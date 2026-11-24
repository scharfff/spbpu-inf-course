print('w x y z')
for w in [0,1]:
    for x in [0,1]:
        for y in [0,1]:
            for z in [0,1]:
                if ( (not(w <= (x==y))) and (z <= x) ) == 1:
                    print(w,x,y,z)
"""
w x y z
1 0 1 0
1 1 0 0
1 1 0 1
"""
# - - - -
# - 0 1 0
# 0 - - 0
# - 1 1 -