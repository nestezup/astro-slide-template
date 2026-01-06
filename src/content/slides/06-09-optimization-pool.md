---
title: "커넥션 풀"
order: 609
---

### 데이터베이스 커넥션 풀링

매번 연결을 생성하지 않고 풀에서 재사용

```javascript
import { createPool } from 'postgres';

// PostgreSQL 커넥션 풀
const pool = createPool({
  connectionString: config.database.url,
  max: 20,              // 최대 커넥션 수
  idle_timeout: 30,     // 유휴 시간 (초)
  connect_timeout: 10   // 연결 타임아웃 (초)
});
```

### 서버 통합

```javascript
const server = Bun.serve({
  port: config.port,
  async fetch(req) {
    try {
      // 커넥션 풀 사용
      const result = await pool`SELECT * FROM users LIMIT 10`;
      return new Response(JSON.stringify(result));
    } catch (error) {
      return new Response('Database Error', { status: 500 });
    }
  }
});
```

### 풀 설정값

| 파라미터 | 권장값 | 설명 |
|----------|--------|------|
| `max` | 20-50 | 최대 동시 커넥션 |
| `idle_timeout` | 20-60 | 유휴 연결 종료 시간 |
| `connect_timeout` | 5-15 | 연결 시도 제한 시간 |

### 장점

- 연결 생성 비용 절감
- 성능 향상
- 리소스 효율적 사용
