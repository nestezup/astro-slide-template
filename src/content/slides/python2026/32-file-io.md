---
title: "파일 입출력"
order: 32
---

### 파일 읽기

```python
# with 문 사용 (권장)
with open('data.txt', 'r', encoding='utf-8') as f:
    content = f.read()
    print(content)
# 자동으로 파일 닫힘
```

### 파일 쓰기

```python
with open('output.txt', 'w', encoding='utf-8') as f:
    f.write("첫 번째 줄\n")
    f.write("두 번째 줄\n")
```

### 줄 단위 읽기

```python
with open('data.txt', 'r') as f:
    for line in f:
        print(line.strip())
```
