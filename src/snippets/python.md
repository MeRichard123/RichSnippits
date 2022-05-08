# Python

### Finding the Frequency of elements in an array

```python
from collections import Counter

my_list = ['a','a','b','b','b','c','d','d','d','d','d']
count = Counter(my_list) # define a counter object

print(count) #of all elements
#counter {'d':5, 'b':3, 'a':2, 'c':1})

print(count['b']) #of individual elements
#3

print(count.most_common(1)) #most frequent
# [('d', 5)]

```

### Merge dictionaries

```python
dict_1 = {'apple':9, 'banana':6}
dict_2 = {'banana':4, 'orange':8}

combined_dict = {**dict_1, **dict_2}

print(combined_dict)

#Output
#{'apple':9,'banana':4,'orange':8}
```

### Sorting dictionaries

```py
dictionary = {"Flowers": 10, 'Trees': 20, 'Chairs': 6, "Firepit": 1, 'Grill': 2, 'Lights': 14}

#sorting by value
sorted_values = sorted(dictionary,key=lambda k:dictionary[k], reverse=True)

#Sorting by Key
sort_by_keys = sorted(dictionary)
```

### Translate Strings - replace characters

```python
"""
Syntax : maketrans(str1, str2, str3)
Parameters :
str1 : Specifies the list of characters that need to be replaced.
str2 : Specifies the list of characters with which the characters need to be replaced.
str3 : Specifies the list of characters that needs to be deleted.
Returns : Returns the translation table which specifies the conversions that can be used by translate()
"""
table = {97:122}
string = "this is a vaary variable sentance with lats af a's"
print(string.translate(table))
# this is z vzzry vzrizble sentznce with lzts zf z's

# With Translate Table
table_trans = string.maketrans("a","z")
print(string.translate(table_trans))
```

### Sampling from a List
```py
import random

my_list = ['a','b','c','d','e']
num_samples = 2

samples = random.sample(my_list, num_samples)
print(samples) # ['a','e']
```

### Flatten a Nested List (1 level deep)
```py
def flatten(l):
    return [item for sublist in l for item in sublist]

l = [[1,2,3],[4,5,6],[7,8,9]]
print(flatten(l))
# [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Extract Domain Name from URL
```py
import re
def get_domain_name(url):
    return re.search('(https?://)?(www\d?\.)?(?P<name>[\w-]+)\.', url).group('name')

def get_domain_name(url):
    return url.split('://')[-1].split('www')[-1].split('.')[0]
```
