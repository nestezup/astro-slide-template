---
title: "단순함이 복잡함보다 낫다"
order: 12
---

### 단순함

```python
squared = [n ** 2 for n in numbers]
```

### 불필요한 복잡함

```python
class NumberProcessor:
    def apply_operation(self, operation):
        return [operation(n) for n in self.numbers]

processor = NumberProcessor([1, 2, 3])
squared = processor.apply_operation(lambda x: x ** 2)
```

**YAGNI**: You Aren't Gonna Need It
