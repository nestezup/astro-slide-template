---
title: "NumPy 배열 연산"
order: 40
---

### 배열 생성

```python
import numpy as np

# 1차원 배열
arr = np.array([1, 2, 3, 4, 5])

# 2차원 배열
matrix = np.array([[1, 2, 3],
                   [4, 5, 6]])

# 특수 배열
zeros = np.zeros(5)       # [0, 0, 0, 0, 0]
ones = np.ones(5)         # [1, 1, 1, 1, 1]
range_arr = np.arange(10) # [0, 1, ..., 9]
```

### 벡터화 연산

```python
arr = np.array([1, 2, 3, 4, 5])
print(arr * 2)     # [2, 4, 6, 8, 10]
print(arr ** 2)    # [1, 4, 9, 16, 25]
print(arr.mean())  # 3.0
```
