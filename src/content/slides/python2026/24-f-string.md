---
title: "문자열 포매팅"
order: 24
---

### f-string (Python 3.6+)

```python
name = "개발자"
age = 25

# 기본 사용
print(f"이름: {name}, 나이: {age}세")

# 표현식
print(f"내년: {age + 1}살")

# 포맷 지정
price = 1234.5
print(f"가격: {price:.2f}원")  # 1234.50원
```

### 실무 활용

```python
for student in students:
    print(f"{student.name}의 점수: {student.score}")
```
