---
title: "Pandas CSV 처리"
order: 39
---

### CSV 읽기/쓰기

```python
import pandas as pd

# CSV 파일 읽기
df = pd.read_csv('sales.csv')

# 데이터 필터링
high_sales = df[df['sales'] > 1000]

# 그룹화
by_category = df.groupby('category')['sales'].sum()

# CSV로 저장
high_sales.to_csv('high_sales.csv', index=False)
```

### 엑셀 파일

```python
# 엑셀 읽기
df = pd.read_excel('report.xlsx', sheet_name='Sheet1')

# 엑셀 저장
df.to_excel('output.xlsx', index=False)
```
