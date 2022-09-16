import sys

print('==>请输入成绩:')
cj = int(sys.stdin.readline().strip('\n'))  # strip('\n')

if(cj > 90):
    print('优秀')
if(cj > 80):
    print('良好')
if(cj > 70):
    print('中等')
if(cj > 60):
    print('及格')
else:
    print('不及格')
