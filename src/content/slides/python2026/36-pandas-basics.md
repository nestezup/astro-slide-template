---
title: "Pandas 기초"
order: 38
---

### DataFrame 생성

```python
import pandas as pd

# 딕셔너리에서 생성
data = {
    'name': ['Alice', 'Bob', 'Charlie'],
    'age': [25, 30, 35],
    'city': ['Seoul', 'Busan', 'Incheon']
}
df = pd.DataFrame(data)
print(df)
```

### 데이터 확인

```python
print(df.head())      # 처음 5행
print(df.info())      # 데이터 정보
print(df.describe())  # 통계 요약
```
