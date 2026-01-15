---
title: "활용: 업무 자동화"
order: 55
---


### 엑셀 자동화

```python
import openpyxl
wb = openpyxl.load_workbook('report.xlsx')
sheet = wb.active
for row in sheet.iter_rows(min_row=2, values_only=True):
    name, sales = row
    if sales > 1000:
        print(f"{name}: 목표 달성!")
```

**효과**: 수작업 10시간 → 스크립트 1분
