# Project 3
[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] ->Binary Search Tree

Root->7

5<7 ? Y ->[5, 7, 1, 8, 3, 6, 0, 9, 4, 2]

1<7 ? Y - 1<5 ? Y ->[1, 5, 7, 8, 3, 6, 0, 9, 4, 2]

3<7 ? Y - 3<5 ? Y - 3<1 ? N -> [1, 3, 5, 7, 8, 6, 0, 9, 4, 2]

6<7 ? Y - 6<5 ? Y -> [1, 3, 5, 6, 7, 8, 0, 9, 4, 2]

0<7 ? Y - 0<5 ? Y - 0<1 ? Y -> [0, 1, 3, 5, 6, 7, 8, 9, 4, 2]

4<7 ? Y - 4<5 ? Y - 4<3 ? N - 4<1 ? N -> [0, 1, 3, 4, 5, 6, 7, 8, 9, 2]

2<7 ? Y - 2<5 ? Y - 2<3 ? Y - 2<1 ? N -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;8\
&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9\
0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3\
&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4

