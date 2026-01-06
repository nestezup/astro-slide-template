---
title: "모니터링"
order: 611
---

### 로깅 시스템

구조화된 로그로 문제 추적

```javascript
const logger = {
  info: (message, data) => {
    console.log(JSON.stringify({
      level: 'info',
      message,
      data,
      timestamp: new Date().toISOString()
    }));
  },

  error: (message, error) => {
    console.error(JSON.stringify({
      level: 'error',
      message,
      error: error.stack,
      timestamp: new Date().toISOString()
    }));
  }
};
```

### 헬스 체크

```javascript
const server = Bun.serve({
  port: config.port,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === '/health') {
      const health = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: {
          used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
          total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024)
        }
      };

      return new Response(JSON.stringify(health), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return handleRequest(req);
  }
});
```

### 배포 체크리스트

- [ ] 환경 변수 설정
- [ ] HTTPS 적용
- [ ] CORS 설정
- [ ] 로깅 시스템
- [ ] 헬스 체크
- [ ] 에러 핸들링
- [ ] 데이터베이스 백업
- [ ] 성능 모니터링
- [ ] 보안 검토
