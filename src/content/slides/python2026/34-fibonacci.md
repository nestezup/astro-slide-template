---
title: "실습: 피보나치 수열"
order: 34
---

### 반복문 방식

```python
def fibonacci_iterative(n):
    """n번째 피보나치 수를 반환"""
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

print(fibonacci_iterative(10))  # 55
```

### 재귀 방식

```python
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)

print(fibonacci_recursive(10))  # 55
```

**재귀는 느림 → 반복문 권장**
