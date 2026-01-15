---
title: "생산성 비교"
order: 56
---


### HTTP 요청

**Java - 10+ 줄**
```java
URL url = new URL("https://api.example.com");
HttpURLConnection conn = ...
BufferedReader in = ...
// 계속...
```

**Python - 1줄**
```python
data = requests.get('https://api.example.com').json()
```

**→ 개발 시간 50% 단축**
