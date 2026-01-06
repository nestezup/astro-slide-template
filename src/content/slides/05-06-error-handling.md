---
title: "에러 처리 미들웨어"
order: 506
---

### 글로벌 에러 핸들링

일관된 에러 응답 형식 제공

```javascript
function errorHandlerMiddleware() {
  return {
    handle: (error, req) => {
      console.error("Error:", error);

      if (error instanceof SyntaxError) {
        return new Response("Invalid JSON", {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }

      return new Response(JSON.stringify({
        error: "Internal Server Error",
        message: error.message
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  };
}

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const errorHandler = errorHandlerMiddleware();

    try {
      if (req.method === "POST") {
        const body = await req.json();
        return new Response(JSON.stringify(body));
      }

      return new Response("OK");
    } catch (error) {
      return errorHandler.handle(error, req);
    }
  }
});
```

### 에러 응답 예시

```json
{
  "error": "Internal Server Error",
  "message": "Cannot read property 'x' of undefined"
}
```
