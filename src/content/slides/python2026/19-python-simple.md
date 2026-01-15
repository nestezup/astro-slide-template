---
title: "파이썬의 간결함"
order: 19
---

### 리스트 필터링

**Java**
```java
List<Integer> evens = new ArrayList<>();
for (Integer num : numbers) {
    if (num % 2 == 0) {
        evens.add(num);
    }
}
```

**Python**
```python
evens = [n for n in numbers if n % 2 == 0]
```

**→ 1줄로 끝!**
