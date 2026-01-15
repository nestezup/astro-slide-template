---
title: "NumPy & Pandas"
order: 42
---


### NumPy - 수치 계산

```python
import numpy as np
arr = np.array([1, 2, 3, 4, 5])
print(arr.mean())  # 3.0
```

### Pandas - 데이터 분석

```python
import pandas as pd
df = pd.read_csv('sales.csv')
print(df.groupby('category').sum())
```

**→ 10~100배 빠름**
