---
title: "Railway 배포"
order: 607
---

### Railway CLI 설치

```bash
npm install -g @railway/cli
```

### 배포 단계

```bash
# 로그인
railway login

# 새 프로젝트 생성
railway new

# 데이터베이스 추가 (선택)
railway add postgresql

# 환경 변수 설정
railway variables set NODE_ENV=production
railway variables set PORT=3000
railway variables set DATABASE_URL=postgresql://...
```

### 배포

```bash
# 코드 업로드 및 배포
railway up

# 로그 모니터링
railway logs

# 열기
railway open
```

### Railway Dockerfile

```dockerfile
FROM oven/bun:alpine

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --production

COPY . .

RUN bun build server.ts --outdir ./dist

EXPOSE 3000

CMD ["bun", "run", "dist/server.js"]
```
