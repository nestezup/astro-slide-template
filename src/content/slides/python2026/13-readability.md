---
title: "가독성은 중요하다"
order: 13
---

### 가독성 낮음
```python
def f(x):return sum([i**2 for i in x if i%2==0])
```

### 가독성 높음
```python
def sum_of_even_squares(numbers):
    """짝수의 제곱 합을 계산"""
    even_numbers = [n for n in numbers if n % 2 == 0]
    squared = [n ** 2 for n in even_numbers]
    return sum(squared)
```

**코드는 작성보다 읽는 시간이 10배 이상**
