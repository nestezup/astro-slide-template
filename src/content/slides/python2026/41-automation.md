---
title: "업무 자동화 예제"
order: 50
---

### 엑셀 자동화

```python
import openpyxl

wb = openpyxl.load_workbook('sales.xlsx')
sheet = wb.active

# 데이터 읽기
for row in sheet.iter_rows(min_row=2, values_only=True):
    name, sales = row
    if sales > 1000:
        print(f"{name}: 목표 달성!")

# 데이터 쓰기
sheet['A1'] = '이름'
sheet['B1'] = '매출'
wb.save('updated.xlsx')
```
