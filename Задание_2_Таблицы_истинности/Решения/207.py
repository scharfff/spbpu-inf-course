print('w x y z')
for w in [0,1]:
    for x in [0,1]:
        for y in [0,1]:
            for z in [0,1]:
                if ( ((x or y) <= z) or (y == w) or z ) == 0:
                    print(w,x,y,z)