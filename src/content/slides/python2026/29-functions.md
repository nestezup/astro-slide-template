---
title: "함수 정의"
order: 29
---

### 함수 기본

```python
def greet(name):
    """인사말을 출력하는 함수"""
    return f"안녕하세요, {name}님!"

message = greet("파이썬")
print(message)  # 안녕하세요, 파이썬님!
```

### 기본값 매개변수

```python
def calculate_price(price, tax_rate=0.1):
    """세금 포함 가격 계산"""
    return price * (1 + tax_rate)

print(calculate_price(1000))      # 1100.0
print(calculate_price(1000, 0.2)) # 1200.0
```
