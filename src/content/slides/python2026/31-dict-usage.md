---
title: "딕셔너리 활용"
order: 31
---

### 딕셔너리 기본

```python
student = {
    "name": "김파이",
    "age": 20,
    "major": "컴퓨터공학"
}

print(student["name"])  # 김파이
print(student.get("grade", "미등록"))  # 미등록
```

### 딕셔너리 순회

```python
scores = {"국어": 90, "영어": 85, "수학": 95}

for subject, score in scores.items():
    print(f"{subject}: {score}점")
```

### 딕셔너리 컴프리헨션

```python
squared = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```
