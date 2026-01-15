---
title: "웹 프레임워크"
order: 45
---


### Django - 풀스택

- Instagram, Pinterest 사용
- Admin 패널 내장

### FastAPI - 최신 고성능

```python
from fastapi import FastAPI
app = FastAPI()

@app.get('/users/{id}')
async def get_user(id: int):
    return {"user_id": id}
```
