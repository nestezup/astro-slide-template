---
title: "Vercel 배포"
order: 606
---

### Vercel 설정 파일

```javascript
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "server.ts",
      "use": "@vercel/bun"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.ts"
    }
  ]
}
```

### 배포 명령어

```bash
# Vercel CLI 설치
bunx vercel

# 로그인 및 초기 설정
vercel login
vercel

# 프로덕션 배포
vercel --prod
```

### 환경 변수

Vercel 대시보드에서 설정:
- `NODE_ENV` = `production`
- `DATABASE_URL` = `postgresql://...`
- `JWT_SECRET` = `your-secret-key`

### 특징

- 자동 HTTPS
- 자동 스케일링
- 글로벌 CDN
- 무료 티어 제공
