---
title: "기본 API 서버 만들기"
order: 3
---

# 기본 HTTP 서버

## Bun의 서버 API

Bun은 내장된 HTTP 서버를 제공합니다.

### 간단한 서버
```javascript
// server.js
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello, Bun Server!");
  }
});

console.log(`Server running on http://localhost:3000`);
```

### 실행하기
```bash
bun server.js
# Server running on http://localhost:3000
```

## 요청 처리

### URL과 메서드 확인
```javascript
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const method = req.method;
    
    return new Response(
      JSON.stringify({
        method,
        path: url.pathname,
        query: Object.fromEntries(url.searchParams)
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  }
});
```

### 라우팅 기본
```javascript
const routes = {
  "/": "Home Page",
  "/api": "API Endpoint",
  "/about": "About Page"
};

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    
    if (routes[url.pathname]) {
      return new Response(routes[url.pathname]);
    }
    
    return new Response("Not Found", { status: 404 });
  }
});
```

## CORS 설정
```javascript
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const response = new Response("CORS enabled!");
    
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    
    return response;
  }
});
```