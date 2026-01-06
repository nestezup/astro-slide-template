---
title: "RESTful API - GET"
order: 403
---

### GET /api/users

전체 사용자 목록 조회와 특정 사용자 조회 구현

```javascript
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    // GET /api/users - 전체 목록
    if (path === "/api/users" && req.method === "GET") {
      return new Response(JSON.stringify(users), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // GET /api/users/:id - 특정 사용자
    const userMatch = path.match(/^\/api\/users\/(\d+)$/);
    if (userMatch && req.method === "GET") {
      const userId = parseInt(userMatch[1]);
      const user = users.find(u => u.id === userId);

      if (user) {
        return new Response(JSON.stringify(user), {
          headers: { "Content-Type": "application/json" }
        });
      }

      return new Response("User not found", { status: 404 });
    }

    return new Response("Not Found", { status: 404 });
  }
});
```
