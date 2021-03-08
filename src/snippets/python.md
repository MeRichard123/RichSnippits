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
