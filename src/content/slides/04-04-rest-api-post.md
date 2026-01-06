---
title: "RESTful API - POST"
order: 404
---

### POST /api/users

새 사용자 생성을 위한 POST 엔드포인트

```javascript
const users = [
  { id: 1, name: "Alice" }
];

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // POST /api/users - 새 사용자 생성
    if (path === "/api/users" && req.method === "POST") {
      // 요청 본문 파싱
      const body = await req.json();

      // 새 사용자 생성
      const newUser = {
        id: users.length + 1,
        ...body
      };
      users.push(newUser);

      return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Not Found", { status: 404 });
  }
});
```

### 사용 예시

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Charlie", "email": "charlie@example.com"}'
```
