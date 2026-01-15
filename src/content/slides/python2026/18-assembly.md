---
title: "어셈블리어의 복잡성"
order: 18
---

### 피보나치 수열 (10번째)

**어셈블리 (17줄)**
```assembly
mov ecx, [n]
mov eax, 0
mov ebx, 1
fib_loop:
    cmp ecx, 0
    je done
    mov edx, eax
    add eax, ebx
    ...
```

**Python (3줄)**
```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```
