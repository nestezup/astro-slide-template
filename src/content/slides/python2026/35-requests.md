---
title: "라이브러리 실습: requests"
order: 35
---

### HTTP 요청

```python
import requests

# GET 요청
response = requests.get('https://api.github.com')
print(response.status_code)  # 200
print(response.json())

# POST 요청
data = {"username": "python", "password": "1234"}
response = requests.post('https://api.example.com/login', 
                         json=data)
```

### 실무 활용

```python
# 날씨 API 호출 예시
url = 'https://api.openweathermap.org/data/2.5/weather'
params = {'q': 'Seoul', 'appid': 'YOUR_API_KEY'}
response = requests.get(url, params=params)
weather = response.json()
```
