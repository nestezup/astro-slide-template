---
title: "환경 설정"
order: 601
---

### 프로덕션 환경 설정

환경 변수로 설정을 관리합니다.

```bash
# .env 파일
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-secret-key
```

### 설정 파일

```javascript
// config.js
const config = {
  port: parseInt(process.env.PORT) || 3000,
  env: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL
  },
  jwt: {
    secret: process.env.JWT_SECRET
  }
};

export default config;
```

### 사용

```javascript
import config from './config.js';

console.log(`Running on port ${config.port}`);
console.log(`Environment: ${config.env}`);
```

### 환경 변수 로딩

```bash
# .env 파일 로드
bun --env-file .env run server.js
```
