---
title: "예외 처리"
order: 33
---

### try-except

```python
try:
    number = int(input("숫자 입력: "))
    result = 10 / number
    print(f"결과: {result}")
except ValueError:
    print("숫자를 입력해주세요!")
except ZeroDivisionError:
    print("0으로 나눌 수 없습니다!")
```

### finally

```python
try:
    f = open('file.txt', 'r')
    content = f.read()
except FileNotFoundError:
    print("파일이 없습니다")
finally:
    f.close()  # 항상 실행
```
