---
title: "캐싱"
order: 610
---

### 메모리 캐싱 구현

자주 요청되는 데이터를 메모리에 저장

```javascript
const cache = new Map();

const server = Bun.serve({
  port: config.port,
  fetch(req) {
    const url = new URL(req.url);
    const cacheKey = `${req.method}:${url.pathname}`;

    // 캐시 확인
    if (cache.has(cacheKey)) {
      const cached = cache.get(cacheKey);
      return new Response(cached.data, cached.response);
    }

    // 요청 처리 및 캐시 저장
    const response = await handleRequest(req);
    const cacheData = {
      data: await response.text(),
      response: {
        status: response.status,
        headers: Object.fromEntries(response.headers)
      }
    };

    cache.set(cacheKey, cacheData);

    // 5분 후 캐시 만료
    setTimeout(() => {
      cache.delete(cacheKey);
    }, 300000);

    return response;
  }
});
```

### 캐시 전략

| 전략 | TTL | 대상 |
|------|-----|------|
| 짧은 캐시 | 1-5분 | 실시간 데이터 |
| 중간 캐시 | 10-30분 | 사용자 데이터 |
| 긴 캐시 | 1시간+ | 정적 데이터 |

### 장점

- 응답 시간 단축
- 데이터베이스 부하 감소
- 비용 절감
