---
title: "Matplotlib 시각화"
order: 41
---

### 선 그래프

```python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]

plt.plot(x, y)
plt.xlabel('X축')
plt.ylabel('Y축')
plt.title('제곱 그래프')
plt.show()
```

### 막대 그래프

```python
categories = ['A', 'B', 'C', 'D']
values = [23, 45, 56, 78]

plt.bar(categories, values)
plt.title('카테고리별 값')
plt.show()
```
