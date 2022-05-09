# Project 2 

[16, 21, 11, 8, 12, 22]-> Merge Sort

1)Merge Sort Steps\
[16, 21, 11, 8, 12, 22]

Seperate until an element left.\
[16, 21, 11]&nbsp;&nbsp;&nbsp;&nbsp;[8, 12, 22]\
[16, 21]&nbsp;&nbsp;[11]&nbsp;&nbsp;&nbsp;&nbsp;[8, 12]&nbsp;&nbsp;[22]\
[16]&nbsp;&nbsp;[21]&nbsp;&nbsp;[11]&nbsp;&nbsp;&nbsp;&nbsp;[8]&nbsp;&nbsp;[12]&nbsp;&nbsp;[22]

Merge until reach the same array size before seperation.\
[16, 21]&nbsp;&nbsp;[11]&nbsp;&nbsp;&nbsp;&nbsp;[8, 12]&nbsp;&nbsp;[22]\
[11, 16, 21]&nbsp;&nbsp;&nbsp;&nbsp;[8, 12, 22]\
[8, 11, 12, 16, 21, 22]

2)Big-O Notation\
O (n*(logn))
