---
title: "데이터 시각화"
order: 43
---


### Matplotlib (기본)

```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3, 4], [1, 4, 9, 16])
plt.show()
```

### Seaborn (통계)

```python
import seaborn as sns
sns.heatmap(df.corr(), annot=True)
```

### Plotly (인터랙티브)
