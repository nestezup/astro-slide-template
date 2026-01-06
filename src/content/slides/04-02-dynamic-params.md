---
title: "동적 라우팅"
order: 402
---

### 경로 파라미터 추출

정규표현식으로 URL에서 파라미터를 추출합니다.

```javascript
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // /users/123 → userId = 123
    const userMatch = path.match(/^\/users\/(\w+)$/);

    if (userMatch) {
      const userId = userMatch[1];
      return new Response(`User: ${userId}`);
    }

    return new Response("Not Found", { status: 404 });
  }
});
```

### 사용 예시

| URL | 결과 |
|-----|------|
| `/users/alice` | User: alice |
| `/users/123` | User: 123 |
| `/users/bob` | User: bob |
