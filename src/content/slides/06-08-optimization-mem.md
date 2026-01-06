---
title: "메모리 최적화"
order: 608
---

### 메모리 관리

```javascript
// 최대 리스너 제한
process.setMaxListeners(10);

// 주기적 가비지 컬렉션
const config = { env: 'production' };

if (config.env === 'production') {
  setInterval(() => {
    if (global.gc) {
      global.gc();
    }
  }, 60000); // 1분마다
}
```

### 메모리 모니터링

```javascript
const server = Bun.serve({
  fetch(req) {
    const usage = process.memoryUsage();
    const mbUsed = Math.round(usage.heapUsed / 1024 / 1024);
    const mbTotal = Math.round(usage.heapTotal / 1024 / 1024);

    return new Response(JSON.stringify({
      heapUsed: `${mbUsed}MB`,
      heapTotal: `${mbTotal}MB`
    }));
  }
});
```

### 최적화 팁

| 항목 | 설명 |
|------|------|
| `setMaxListeners` | 메모리 누수 방지 |
| `global.gc()` | 명시적 가비지 컬렉션 |
| 메모리 사용량 모니터링 | 이상 징후 조기 발견 |
| 불필요한 데이터 정리 | 맵/캐시 크기 제한 |
