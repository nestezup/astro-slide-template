---
title: "프로덕션 서버"
order: 603
---

### 프로덕션 서버 설정

운영 환경에 최적화된 서버 설정

```javascript
// server-production.ts
import config from './config.js';

const server = Bun.serve({
  port: config.port,
  hostname: '0.0.0.0', // 모든 IP에서 접근
  development: false, // 개발 모드 비활성화
  fetch(req) {
    const url = new URL(req.url);

    // Health check
    if (url.pathname === '/health') {
      return new Response('OK', {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    // API 요청 처리
    return handleAPIRequest(req);
  }
});

console.log(`🚀 Server running on port ${config.port} in ${config.env} mode`);
```

### 핵심 설정

- `hostname: '0.0.0.0'` - 모든 네트워크 인터페이스 허용
- `development: false` - 핫 리로드 비활성화
- `/health` 엔드포인트 - 상태 확인

### 실행

```bash
bun --env-file .env run server-production.ts
```
