---
title: "2025 트렌드: Polars"
order: 47
---


고성능 데이터 처리

- Rust로 작성
- **Pandas보다 10~100배 빠름**
- 멀티코어 활용

```python
import polars as pl
df = pl.read_csv('large_file.csv')
result = df.group_by('category').agg(pl.col('sales').sum())
```
