---
title: "리스트 컴프리헨션"
order: 30
---

### Python의 강력한 기능

**기본 for 반복문**
```python
squares = []
for i in range(10):
    squares.append(i ** 2)
```

**리스트 컴프리헨션**
```python
squares = [i ** 2 for i in range(10)]
```

### 조건 필터링

```python
# 짝수만
evens = [i for i in range(10) if i % 2 == 0]
# [0, 2, 4, 6, 8]

# 문자열 변환
names = ["alice", "bob", "charlie"]
upper_names = [name.upper() for name in names]
# ["ALICE", "BOB", "CHARLIE"]
```
