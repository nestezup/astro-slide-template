---
title: "미들웨어 체인"
order: 505
---

### 여러 미들웨어 순차 실행

미들웨어 배열을 순차적으로 적용합니다.

```javascript
const middlewares = [
  loggingMiddleware,
  corsMiddleware,
  authMiddleware
];

async function applyMiddlewares(req, handler) {
  let middlewareData = {};

  for (const middleware of middlewares) {
    const result = middleware(req, middlewareData);

    // 에러 발생 시 즉시 반환
    if (result.error) {
      return result.error;
    }

    middlewareData = { ...middlewareData, ...result };
  }

  // 최종 핸들러 실행
  return handler(req, middlewareData);
}

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return applyMiddlewares(req, (req, data) => {
      return new Response(JSON.stringify({
        message: "Request processed",
        data: data
      }), {
        headers: { "Content-Type": "application/json" }
      });
    });
  }
});
```

### 실행 순서

1. 로깅 (요청 기록)
2. CORS (헤더 설정)
3. 인증 (토큰 검증)
4. 핸들러 (요청 처리)
