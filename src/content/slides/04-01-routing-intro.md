---
title: "라우팅 개요"
order: 401
---

### 라우팅 시스템

Bun에서 라우팅을 구현하는 방법을 알아봅니다.

- **URL 파싱**: `new URL(req.url)`로 경로 추출
- **경로 매칭**: 정규표현식으로 동적 라우팅
- **메서드 구분**: `req.method`로 HTTP 메서드 확인
- **쿼리 파라미터**: `URLSearchParams`로 쿼리 처리

### 간단한 예제

```javascript
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    if (path === "/") return new Response("Home");
    if (path === "/api") return new Response("API");

    return new Response("Not Found", { status: 404 });
  }
});
```
