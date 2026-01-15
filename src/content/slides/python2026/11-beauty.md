---
title: "아름다운 것이 추한 것보다 낫다"
order: 11
---

### 아름다운 코드

```python
def calculate_total_price(items):
    """상품 목록의 총 가격 계산"""
    return sum(item.price for item in items)
```

### 추한 코드

```python
def calc(x):
    t=0
    for i in x:
        t=t+i.price
    return t
```

**차이**: 명확한 의도, 가독성
