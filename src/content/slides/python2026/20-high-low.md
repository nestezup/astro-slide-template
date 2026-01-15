---
title: "고수준 vs 저수준"
order: 20
---

| 수준 | 언어 | 특징 |
|------|------|------|
| 고수준 | Python | 생산성 ↑, 속도 ↓ |
| 중수준 | C | 균형 |
| 저수준 | Assembly | 생산성 ↓, 속도 ↑ |

### 메모리 관리 예시

**C (수동)**
```c
int* arr = (int*)malloc(5 * sizeof(int));
free(arr);  // 필수!
```

**Python (자동)**
```python
arr = [1, 2, 3, 4, 5]
# 자동으로 메모리 관리
```
