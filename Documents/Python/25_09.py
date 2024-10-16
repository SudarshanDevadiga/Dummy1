Python 3.12.6 (v3.12.6:a4a2d2b0d85, Sep  6 2024, 16:08:03) [Clang 13.0.0 (clang-1300.0.29.30)] on darwin
Type "help", "copyright", "credits" or "license()" for more information.
>>> t1=(1,2,3,4,5)
>>> print (t1)
(1, 2, 3, 4, 5)
>>> s1={10,20,30}
>>> s2={10,20,30,10}
>>> s3={100,0.5,10,200,'abc'}
>>> s4={1,2,(3,4)}
>>> s5={1,2,[3,4]}
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    s5={1,2,[3,4]}
TypeError: unhashable type: 'list'
>>> print(s1)
{10, 20, 30}
>>> print (s2)
{10, 20, 30}
>>> print (s3)
{0.5, 100, 200, 10, 'abc'}
>>> print (s3[0])
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    print (s3[0])
TypeError: 'set' object is not subscriptable
>>> print (s4)
{1, 2, (3, 4)}
