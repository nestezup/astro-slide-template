---
title: "로깅 미들웨어"
order: 502
---

### 요청 로깅 구현

모든 요청과 응답을 기록합니다.

```javascript
function loggingMiddleware(req) {
  const start = Date.now();
  const url = new URL(req.url);

  console.log(`[${new Date().toISOString()}] ${req.method} ${url.pathname}`);

  return {
    onResponse: (response) => {
      const duration = Date.now() - start;
      console.log(`Response: ${response.status} (${duration}ms)`);
      return response;
    }
  };
}

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const middleware = loggingMiddleware(req);
    let response = new Response("Hello, World!");

    if (middleware.onResponse) {
      response = middleware.onResponse(response);
    }

    return response;
  }
});
```

### 로그 예시

```
[2024-01-06T12:00:00.000Z] GET /api/users
Response: 200 (15ms)
[2024-01-06T12:00:01.000Z] POST /api/users
Response: 201 (23ms)
```
